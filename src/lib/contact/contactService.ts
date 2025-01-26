import { BadRequest } from "@/errors/badRequest";
import Contact from "./contact";

import Database from "@/utils/database";

import ContactInterface from "./interfaces";
import EmailHandler from "../emailHandler/emailHandler";
import IpAddressUtils from "../utils/ipUtils";

class ContactService {

    private emailHandler: EmailHandler

    constructor() {
        Database.connect();
        this.emailHandler = new EmailHandler();
    }

    validateContact(data: ContactInterface) {
        if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
            throw new BadRequest('Campos obrigatórios não preenchidos');
        }
    }

    createContact(data: ContactInterface): Promise<ContactInterface> {
        this.validateContact(data);
        const userIp = IpAddressUtils.getIpAddress();

        data.ipAddress = userIp;
        data.createdAt = Date.now();

        return new Promise((resolve, reject) => {
            const contact = new Contact(data);

            contact.save()
                .then(() => resolve(contact.toJSON()))
                .catch((err: Error) => reject(err))

            const contactObject: ContactInterface = contact.toObject();
            this.emailHandler.emailUserConfirmation(contactObject);
            this.emailHandler.warnAdmin(contactObject);

            resolve(data)
        })
    }

}


export default ContactService;