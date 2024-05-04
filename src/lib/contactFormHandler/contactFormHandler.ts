import { BadRequest } from "@/errors/badRequest";
import Contact from "./contact";

import Database from "@/utils/database";
Database.connect();

import IContactForm from "./contactFormInterface";
import telegramWarnAdmin from "../telegramLogger/telegramLogger";
import emailUserConfirmation from "../emailHandler/emailHandler";

const validateContact = (data: IContactForm) => {
    if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
        throw new BadRequest('Campos obrigatórios não preenchidos');
    }
}

const contactFormHandler = (data: IContactForm): Promise<IContactForm> => {
    validateContact(data);

    return new Promise((resolve, reject) => {
        const contact = new Contact(data);
        
        contact.save()
            .then(() => resolve(contact.toJSON()))
            .catch((err: Error) => reject(err))

        const contactObject: IContactForm = contact.toObject();
        telegramWarnAdmin(contactObject);
        emailUserConfirmation(contactObject);

        resolve(data)
    })
}

export default contactFormHandler;