import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

import { apiGetOnboarding } from '@/services/auth.service';
import { create, StateCreator } from 'zustand'
import { OnboardingResponseModel } from '@/types/onboarding.model';

/**
 * Onboarding state
 */
export type OnboardingState = {
  onboarding: OnboardingResponseModel | null
  setOnboarding: (onboarding: OnboardingResponseModel | null) => void
  directDebitForm: DirectDebitFormData | null
  setDirectDebitForm: (formData: DirectDebitFormData | null) => void
  apiGetOnboarding: () => Promise<OnboardingResponseModel>
}
export type DirectDebitFormData = {
  firstName?: string;
  lastName?: string;
  companyAccountName?: string;
  isCompany: boolean;
  email: string;
  sortCode: string;
  accountNumber: string;
  postcode: string;
  singleAuthorization: boolean;
}
export const useAuthStore = create(
  /**
   * Create store with devtools and immer middleware
   */
  devtools(
    immer<OnboardingState>((set) => ({
      onboarding: null,
      setOnboarding: (onboarding) => set((state) => { state.onboarding = onboarding }),
      directDebitForm: null,
      setDirectDebitForm: (formData) => set((state) => { state.directDebitForm = formData }),
      apiGetOnboarding: async () => {
        try {
          const response = await apiGetOnboarding();
          if (!response?.data) {
            throw new Error('Invalid onboarding response');
          }
          const onboarding = response.data as OnboardingResponseModel;
          set((state) => { state.onboarding = onboarding });
          return onboarding;
        } catch (error) {
          set((state) => { state.onboarding = null });
          throw error; // Re-throw to let caller handle the error
        }
      }
    })) as StateCreator<OnboardingState, [], []>,
    {
      name: 'auth-store',
      store: 'auth-store'
    }
  ) as StateCreator<OnboardingState, [], []>

)