import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { fetchAuthSession, AuthError } from 'aws-amplify/auth';
import { toast } from 'sonner';
import { API_GATEWAY_URL } from '@/constants/global-constants';

// Configure axios defaults
axios.defaults.baseURL = API_GATEWAY_URL;

// Extend the InternalAxiosRequestConfig type
interface CustomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Type for the retry queue
interface RetryQueueItem {
  resolve: (value: unknown) => void;
  reject: (error: unknown) => void;
  config: CustomInternalAxiosRequestConfig;
}

let isRefreshing = false;
let failedQueue: RetryQueueItem[] = [];

const processQueue = (error: AxiosError | null, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else if (token) {
      promise.config.headers.Authorization = `Bearer ${token}`;
      promise.resolve(axios(promise.config));
    }
  });
  failedQueue = [];
};

// Request interceptor
axios.interceptors.request.use(
  async (config) => {
    try {
      const session = await fetchAuthSession();
      const token = session.tokens?.idToken?.toString();
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as CustomInternalAxiosRequestConfig;
    
    // Handle unauthorized errors
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // If token refresh is in progress, add request to queue
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Attempt to refresh the session
        const session = await fetchAuthSession();
        const newToken = session.tokens?.idToken?.toString();

        if (!newToken) {
          throw new AuthError({ 
            name: 'TokenRefreshError',
            message: 'Failed to refresh token'
          });
        }

        // Process queued requests with new token
        processQueue(null, newToken);
        
        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest);
      } catch (refreshError) {
        processQueue(error as AxiosError);
        toast.error('Your session has expired. Please sign in again.');
        // Redirect to login or handle session expiration
        window.location.href = '/signin';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    // Handle other errors
    if (error.response?.status === 404) {
      toast.error('Resource not found');
    } else if (error.response?.status === 500) {
      toast.error('An unexpected error occurred');
    }

    return Promise.reject(error);
  }
);

export const setupAxiosInterceptors = () => {
  // This function can be called from App.tsx to ensure interceptors are set up
  // Additional setup can be added here if needed
};