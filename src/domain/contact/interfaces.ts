export default interface ContactInterface {
    firstName: string
    lastName: string
    email: string
    phone: string
    subject: string
    message: string
    ipAddress?: string
    createdAt?: number
    updatedAt?: number
}

export interface CreateContactInterface extends ContactInterface {}