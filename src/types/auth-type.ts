export enum EnumOnboardingStep {
  Initialize = "initialize",
  VerifyCompany = "verify_company",
  CompanyDetails = "update_company_profile",
  Complete = "complete"
}
export enum EnumOnboardingStatus {
  InProgress = "in_progress",
  Completed = "completed"
}

// interface DateOfBirth {
//   month?: number;
//   year?: number;
// }

// interface Address {
//   address_line_1?: string;
//   locality?: string;
//   country?: string;
//   postal_code?: string;
// }

// export interface Director {
//   name?: string;
//   occupation?: string;
//   nationality?: string;
//   country_of_residence?: string;
//   is_user?: boolean;
//   date_of_birth?: DateOfBirth;
// }

// interface PersonWithSignificantControl {
//   name?: string;
//   natures_of_control?: string[];
//   nationality?: string;
//   country_of_residence?: string;
//   date_of_birth?: DateOfBirth;
// }

// interface VerifyCompanyData {
//   sic_codes?: string[];
//   company_number?: string;
//   persons_with_significant_control?: PersonWithSignificantControl[];
//   company_name?: string;
//   directors?: Director[];
//   date_of_creation?: string;
//   registered_office_address?: Address;
//   company_status?: string;
// }

// interface CardPayment {
//   stripe_customer_id?: string;
//   client_secret?: string;
// }

// interface CompanyItem {
//   company_id?: string;
//   admin_user_id?: string;
//   directors?: Director[];
//   created_at?: string;
//   verify_company?: VerifyCompanyData;
//   sic_codes?: string[];
//   updated_at?: string;
//   company_registration_number?: string;
//   phone?: string;
//   company_name?: string;
//   date_of_creation?: string;
//   registered_office_address?: Address;
//   company_status?: string;
//   email?: string;
//   card_payment?: CardPayment;
// }

// interface UserItem {
//   company_id?: string;
//   updated_at?: string;
//   user_id?: string;
//   phone?: string;
//   last_name?: string;
//   created_at?: string;
//   first_name?: string;
//   is_verified?: boolean;
//   email?: string;
// }

// interface OnboardingStep {
//   created_at?: string;
//   completed_at?: string;
//   step_name?: string;
// }

// export interface OnboardingResponse {
//   company_id?: string;
//   updated_at?: string;
//   user_id?: string;
//   created_at?: string;
//   current_step?: string;
//   user_item?: UserItem;
//   status?: string;
//   steps?: OnboardingStep[];
//   onboarding_id?: string;
//   company_item?: CompanyItem;
// }

// export type ModelOnboardingItem = {
//   company_id: string
//   updated_at: string
//   user_id: string
//   created_at: string
//   current_step: string
//   user_item: {
//     company_id: string
//     updated_at: string
//     user_id: string
//     phone: string
//     last_name: string
//     created_at: string
//     first_name: string
//     job_title: string
//     email: string
//   }
//   status: string
//   steps: {
//     created_at: string
//     completed_at?: string
//     step_name: string
//   }[]
//   onboarding_id: string
// }
