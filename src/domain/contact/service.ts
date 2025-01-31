import { BadRequest } from "@/errors/badRequest";
import Contact from "./service";

import ContactInterface from "./interfaces";
import TelegramLogger from "../../lib/telegramLogger/telegramLogger";
import EmailHandler from "../../lib/emailHandler/emailHandler";
import IpAddressUtils from "../../lib/utils/ipUtils";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";
import { prisma } from "@/lib/prisma";

export type ContactInterfaceNew = Prisma.ContactGetPayload<Prisma.ContactDefaultArgs>;

class ContactService {

    private _prisma: PrismaClient;
    private telegramLogger: TelegramLogger
    private emailHandler: EmailHandler

    constructor(_prisma: PrismaClient = prisma) {
        this._prisma = _prisma;
        this.telegramLogger = new TelegramLogger();
        this.emailHandler = new EmailHandler();
    }

    validateContact(data: ContactInterface) {
        if (!data.firstName || !data.lastName || !data.email || !data.subject || !data.message) {
            throw new BadRequest('Campos obrigatórios não preenchidos');
        }
    }
    
    async createContact(data: ContactInterface): Promise<ContactInterface> {
        this.validateContact(data);
        const userIp = IpAddressUtils.getIpAddress();
        
        data.ipAddress = userIp;
        const contact = await this._prisma.contact.create({ data });
    
        this.telegramLogger.warnAdmin(contact);
        this.emailHandler.emailUserConfirmation(contact);
        
        return contact
    }
    
}


export default ContactService;