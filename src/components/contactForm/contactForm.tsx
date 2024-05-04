'use client';

import { FormEvent, FormEventHandler, useRef, useState } from "react";
import LoadingWheel from '@/components/loadingWheel/loadingWheel';
import FloatInput from "./floatInput";
import Button from "../button/button";

interface inputsType {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const [inputs, setInputs] = useState<inputsType>();
    const [contactMessageSent, setContactMessageSent] = useState<Boolean | null>(null);
    const [contactErrorMessage, setContactErrorMessage] = useState<String>('');
    const [formLoading, setFormLoading] = useState<Boolean>(false);

    const handleFormSubmit: FormEventHandler = (event: FormEvent) => {
        event.preventDefault();
        setFormLoading(true);

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'content-type':'application/json'
            }
        })
            .then(async(data) => {
                if(!data.ok) return Promise.reject(await data.json());
            })
            .then(data => {
                setFormLoading(false);
                setContactMessageSent(true);
            })
            .catch(err => {
                console.error(err);
                setFormLoading(false);
                setContactErrorMessage(err.message ? err.message : 'Tente novamente mais tarde.');
                setContactMessageSent(false);
            })
            .finally(() => {
                if(form.current) form.current.scrollIntoView();
            })
    }

    const handleType = (event: FormEvent) => {
        event.preventDefault();

        const name = (event.target as HTMLFormElement).name;
        const value = (event.target as HTMLFormElement).value;

        setInputs(values => ({
            ...values!, 
            [name]: value
        }))
    }

    return (
        <form ref={form} className='p-[10vw] md:p-[5vw] text-white md:w-3/4 lg:w-1/2 m-auto md:border-2 md:border-solid md:border-white md:rounded-2xl' onSubmit={handleFormSubmit}>
            <h1 className='font-bold mb-5 text-center text-[6vw] md:text-[3vw]'>Deixe-me uma mensagem!</h1>

            {
                contactMessageSent === true
                    ? <div id='successMessage' className='border border-solid border-green-300 text-green-300 rounded-lg flex align-items-center p-3 mb-8'>
                        <div>
                            Obrigado! Sua mensagem foi enviada, assim que possível entrarei em contato.
                        </div>
                    </div>
                    : contactMessageSent === false
                        ? <div id='failureMessage' className='border border-solid border-red-300 text-red-300 rounded-lg flex align-items-center p-3 mb-8'>
                            <div>
                                Ocorreu um erro ao enviar sua mensagem: { contactErrorMessage }
                            </div>
                        </div>
                        : ''
            }

            <div className="mb-5 flex justify-between gap-10">
                <div className='w-full'>
                    <FloatInput 
                        id="nameInput" 
                        value={inputs?.firstName || ""} 
                        onChange={handleType}
                        placeholder="Nome"
                        borderColor="white"
                        name="firstName"
                        required={true}
                        type="text"
                        />
                </div>
                <div className='w-full'>
                    <FloatInput 
                        id="lastNameInput" 
                        value={inputs?.lastName || ""} 
                        onChange={handleType}
                        placeholder="Sobrenome"
                        borderColor="white"
                        name="lastName"
                        required={true}
                        type="text"
                        />
                </div>
            </div>

            <div className="mb-5">
                <FloatInput 
                    id="emailInput" 
                    value={inputs?.email || ""} 
                    onChange={handleType}
                    placeholder="Email"
                    borderColor="white"
                    name="email"
                    required={true}
                    type="email"
                    />
            </div>

            <div className="mb-5">
                <FloatInput 
                    id="phoneInput" 
                    value={inputs?.phone || ""} 
                    onChange={handleType}
                    placeholder="Celular"
                    borderColor="white"
                    name="phone"
                    required={false}
                    type="tel"
                    />
            </div>


            <div className="mb-5">
                <FloatInput 
                    id="subject" 
                    value={inputs?.subject || ""} 
                    onChange={handleType}
                    placeholder="Assunto"
                    borderColor="white"
                    name="subject"
                    required={true}
                    type="text"
                    />
            </div>

            <div className="mb-5">
                <label htmlFor="messageInput">Mensagem <span className='text-red-400'>*</span></label>
                <textarea
                    name="message"
                    className="w-full p-3 bg-transparent border rounded focus:outline-none focus:ring-0"
                    id="messageInput"
                    style={{ height: "150px" }}
                    placeholder="Digite sua mensagem aqui"
                    value={inputs?.message || ""}
                    onChange={handleType}
                    required
                />
            </div>

            <span className="text-sm text-gray-400">Nunca compartilharemos seus dados com terceiros.</span>

            <div className='flex align-items-center mt-3 gap-5'>
                <Button type="submit">Enviar Mensagem</Button>
                {formLoading ? <LoadingWheel size={20} /> : ''}
            </div>
        </form>
    )
}

export default ContactForm;