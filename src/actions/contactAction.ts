'use server';

import ContactService from "@/lib/contact/contactService";
import { CreateContactInterface } from "@/lib/contact/interfaces";

const contactService = new ContactService();

export const createContact = async (createContact: CreateContactInterface) => {
    try {
        var contact = await contactService.createContact(createContact);
    } catch (error) {
        console.error(error);
        throw error;
    }

    return contact;
}