export interface OnboardingResponseModel {
    onboarding_id?: string
    steps?: Steps
    master?: Master
}

export interface Steps {
    initialize?: Initialize
    update_company_profile?: UpdateCompanyProfile
    verify_company?: VerifyCompany
    payment?: Payment
}

export interface Initialize {
    user_item?: UserItem
    completed_at?: string
    company_item?: CompanyItem
    status?: string
}

export interface UserItem {
    company_id?: string
    updated_at?: string
    user_id?: string
    phone?: string
    last_name?: string
    created_at?: string
    first_name?: string
    email?: string
}

export interface CompanyItem {
    created_at?: string
    company_id?: string
    admin_user_id?: string
    updated_at?: string
    phone?: string
    email?: string
}

export interface UpdateCompanyProfile {
    completed_at?: string
    company_data?: CompanyData
    status?: string
}

export interface CompanyData {
    company_id?: string
    admin_user_id?: string
    directors?: Director[]
    created_at?: string
    sic_codes?: string[]
    updated_at?: string
    company_registration_number?: string
    phone?: string
    company_name?: string
    date_of_creation?: string
    registered_office_address?: RegisteredOfficeAddress
    company_status?: string
    email?: string
    stripe?: Stripe
}

export interface DateOfBirth {
    month?: number
    year?: number
}

export interface RegisteredOfficeAddress {
    address_line_1?: string
    locality?: string
    country?: string
    postal_code?: string
}

export interface Stripe {
    stripe_customer_id?: string
    client_secret?: string
}

export interface VerifyCompany {
    verify_company?: VerifyCompany2
    completed_at?: string
    status?: string
}

export interface VerifyCompany2 {
    sic_codes?: string[]
    company_number?: string
    persons_with_significant_control?: PersonsWithSignificantControl[]
    company_name?: string
    directors?: Director2[]
    date_of_creation?: string
    registered_office_address?: RegisteredOfficeAddress2
    company_status?: string
}

export interface PersonsWithSignificantControl {
    name?: string
    natures_of_control?: string[]
    nationality?: string
    country_of_residence?: string
    date_of_birth?: DateOfBirth
}

export interface Director2 {
    name?: string
    occupation?: string
    nationality?: string
    country_of_residence?: string
    date_of_birth?: DateOfBirth
}

export interface Director {
    name?: string
    occupation?: string
    nationality?: string
    country_of_residence?: string
    is_user?: boolean
    date_of_birth?: DateOfBirth
}

export interface RegisteredOfficeAddress2 {
    address_line_1?: string
    locality?: string
    country?: string
    postal_code?: string
}

export interface Payment {
    status?: string
    completed_at?: string
    stripe_customer_id?: string
    client_secret?: string
}

export interface Master {
    completed_steps?: string[]
    progress?: number
    total_steps?: number
    log?: Log[]
    current_step?: string
    status?: string
}

export interface Log {
    timestamp?: string
    written?: Written[]
    deleted?: any[]
}

export interface Written {
    item?: string
    timestamp?: string
}
