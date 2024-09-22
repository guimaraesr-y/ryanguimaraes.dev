import AppError from "@/errors/appError";
import { CreateContactInterface } from "@/lib/contact/interfaces";
import { useState } from "react";
import * as contactAction from "@/actions/contactAction";

export const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const createContact = async (contact: CreateContactInterface) => {
        try {
            setLoading(true);
            const createdContact = await contactAction.createContact(contact);
            return createdContact;
        } catch (error: any) {
            if(error instanceof AppError) {
                setError(error.message);
            } else {
                setError('Ocorreu um erro inesperado!');
            }

            throw error;
        } finally {
            setLoading(false);
        }
    }

    return {
        createContact,
        loading,
        error,
    }
}