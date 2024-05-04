export default interface IContactForm {
    firstName: string
    lastName: string
    email: string
    phone: string
    subject: string
    message: string
    ipAddres: string
    createdAt?: Date
    updatedAt?: Date
}