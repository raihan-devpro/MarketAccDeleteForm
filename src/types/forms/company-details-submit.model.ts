import { Director, RegisteredOfficeAddress } from "@/types/onboarding.model"

export interface CompanyDetailsSubmitModel {
    company_name: string
    company_registration_number: string
    company_status: string
    date_of_creation: string
    registered_office_address: RegisteredOfficeAddress
    sic_codes: string[]
    directors: Director[]
}