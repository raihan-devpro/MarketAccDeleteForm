import axios from 'axios';
import { API_GATEWAY_URL } from '@/constants/global-constants';
import { fetchAuthSession } from 'aws-amplify/auth';


interface OnboardingInitializeRequest {
    first_name: string;
    last_name: string;
    email?: string;
    phone: string;
    job_title: string;
}

export const apiInitializeOnboarding = async (data: OnboardingInitializeRequest) => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const url = `${API_GATEWAY_URL}/onboarding/initialize`;
    console.log("Api url: ", url, data);
    const response = await axios.post(url, data, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });
    return response;
};

export const apiUploadUserProfileImage = async (file: File) => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const apiUrl = `${API_GATEWAY_URL}/attachment`;

    const body = {

        entity_id: session?.userSub, // Replace with actual user ID
        entity_type: "user",
        attachment_label: "profile-picture",
        attachment_id: crypto.randomUUID(), // Generate a unique ID
        // file_name: `${session?.userSub}.${file.name.split('.').pop()}`
        file_name: file.name
    }
    console.log("Api url: ", apiUrl, body);
    let response = await axios.post(apiUrl, body, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });

    return response;
};

export const apiGetOnboarding = async () => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const url = `${API_GATEWAY_URL}/onboarding`;
    console.log("Api url: ", url);
    const response = await axios.get(url, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });

    return response
};

export const apiPaymentIntent = async (body: any) => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const url = `${API_GATEWAY_URL}/onboarding/payment`;
    console.log("Api url: ", url, body);
    const response = await axios.post(url, body, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });

    return response
};
export const apiPaymentConfirm = async (body: any, id: string) => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const url = `${API_GATEWAY_URL}/onboarding/payment/${id}`;
    console.log("Api url: ", url, body);
    const response = await axios.post(url, body, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });

    return response
};

export const apiOnboardingVerifyCompany = async (body: any) => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const url = `${API_GATEWAY_URL}/onboarding/verify-company`;
    console.log("Api url: ", url, body);
    const response = await axios.post(url, body, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });
    return response
}

export const apiOnboardingUpdateCompanyDetails = async (body: any) => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const url = `${API_GATEWAY_URL}/onboarding/update-company-profile`;
    console.log("Api url: ", url, body);
    const response = await axios.post(url, body, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });
    return response
}
export interface DirectDebitFormDataSubmit {
    country_code: string,
    currency: string,
    account_details: {
        account_type: string,
        account_holder_name: string,
        account_number: string,
        branch_code: string
    }
}


export const apiSubmitDirectDebit = async (body: any) => {
    const session = await fetchAuthSession();
    const bearerToken: string = session.tokens?.idToken?.toString() ?? "";
    const url = `${API_GATEWAY_URL}/onboarding/setup-direct-debit`;
    console.log("Api url: ", url, body);
    const response = await axios.post(url, body, {
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/json'
        },
        withCredentials: false
    });

    return response;
};
