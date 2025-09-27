import { useState, useReducer } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import PageTransition from "../components/PageTransition";

const EMAIL_JS_SERVICE = import.meta.env.VITE_EMAIL_JS_SERVICE;
const EMAIL_JS_TEMPLATE = import.meta.env.VITE_EMAIL_JS_TEMPLATE;
const EMAIL_JS_USER = import.meta.env.VITE_EMAIL_JS_USER;
const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
};

function reducer(state, action) {
    switch (action.type) {
        case 'firstname':
            return { ...state, firstname: action.value };
        case 'lastname':
            return { ...state, lastname: action.value };
        case 'email':
            return { ...state, email: action.value };
        case 'subject':
            return { ...state, subject: action.value };
        case 'message':
            return { ...state, message: action.value };
        default:
            throw new Error();
    }
}

function Contact() {

    const [formState, dispatch] = useReducer(reducer, initialState);
    const [showFormErr, setShowFormErr] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
    const [showCaptcha, setShowCaptcha] = useState(false);
    const { firstname, lastname, email, subject, message } = formState;

    const submitFormAndShowCaptcha = (e) => {
        e.preventDefault();
        setShowCaptcha(true);
    };

    const sendEmail = (captchaValue) => {
        if (firstname === '' || lastname === '' || email === '' || message === '') {
            setShowFormErr(true);
            return;
        }

        const params = {
            ...formState,
            'g-recaptcha-response': captchaValue,
        };

        setFormSubmitted({ title: 'Sending message...', paragraph: '' });
        emailjs.send(
            EMAIL_JS_SERVICE,
            EMAIL_JS_TEMPLATE,
            params,
            EMAIL_JS_USER,
        )
            .then(({ status }) => {
                if (status === 200) {
                    setFormSubmitted({ title: 'Votre message à bien été envoyé.', paragraph: 'Je vais faire de mon mieux pour vous répondre au plus vite !' });
                } else {
                    setFormSubmitted({ title: 'Code d\'état inattendu renvoyé par EmailJS, réessayez ultérieurement.', paragraph: 'Merci de me contacter par le biais d\'une autre plateforme (Facebook, Discord, Github, Linkedin).' });
                }
            }, (err) => {
                // eslint-disable-next-line no-console
                console.log(err);
                setFormSubmitted({ title: 'Une erreur est survenue lors de l\'envoi de votre message, merci de réessayer unltérieurement.', paragraph: 'Merci de me contacter par le biais d\'une autre plateforme (Facebook, Discord, Github, Linkedin).' });
            });
    };

    return formSubmitted.title === '' ? (
        <div className="w-11/12 mx-auto py-5">
            <PageTransition>
                <div className="my-5">
                    <h1 className="text-center text-2xl text-neutral-200 font-semibold">À Propos de Moi</h1>
                </div>
                {!showCaptcha ? (
                    <form className="" onSubmit={submitFormAndShowCaptcha}>
                        <div className="flex flex-col w-11/12 lg:w-9/12 mx-auto">
                            <div className="flex flex-col sm:flex-row">
                                <div className="sm:mr-4 w-full flex flex-col justify-center">
                                    <label className="block text-neutral-400 font-bold my-2 w-full" htmlFor="contact-form-firstname">
                                        Prénom :
                                        <input
                                            id="contact-form-firstname"
                                            className="appearance-none border-2 border-neutral-500 bg-neutral-300 w-full p-2 text-neutral-700 leading-tight focus:outline-none focus:border-primary-blue"
                                            type="text"
                                            value={firstname}
                                            onChange={(e) => dispatch({ type: 'firstname', value: e.target.value })}
                                            required
                                        />
                                    </label>
                                    <label className="block text-neutral-400 font-bold my-2 w-full" htmlFor="contact-form-lastname">
                                        Nom :
                                        <input
                                            id="contact-form-lastname"
                                            className="appearance-none border-2 border-neutral-500 bg-neutral-300 w-full p-2 text-neutral-700 leading-tight focus:outline-none focus:border-primary-blue"
                                            type="text"
                                            value={lastname}
                                            onChange={(e) => dispatch({ type: 'lastname', value: e.target.value })}
                                            required
                                        />
                                    </label>
                                    <label className="block text-neutral-400 font-bold my-2 w-full" htmlFor="contact-form-email">
                                        Email :
                                        <input
                                            id="contact-form-email"
                                            className="appearance-none border-2 border-neutral-500 bg-neutral-300 w-full p-2 text-neutral-700 leading-tight focus:outline-none focus:border-primary-blue"
                                            type="email"
                                            value={email}
                                            onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="sm:mr-4 w-full flex flex-col items-end">
                                    <label className="block text-neutral-400 font-bold my-2 w-full" htmlFor="contact-form-subject">
                                        Sujet :
                                        <input
                                            id="contact-form-subject"
                                            className="appearance-none border-2 border-neutral-500 bg-neutral-300 w-full p-2 text-neutral-700 leading-tight focus:outline-none focus:border-primary-blue"
                                            type="text"
                                            value={subject}
                                            onChange={(e) => dispatch({ type: 'subject', value: e.target.value })}
                                            required
                                        />
                                    </label>
                                    <label className="block text-neutral-400 font-bold my-2 w-full" htmlFor="contact-form-message">
                                        Message :
                                        <textarea
                                            rows="5"
                                            id="contact-form-message"
                                            className="appearance-none border-2 border-neutral-500 bg-neutral-300 w-full p-2 text-neutral-700 leading-tight focus:outline-none focus:border-primary-blue"
                                            type="text"
                                            value={message}
                                            onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                {showFormErr ? <p className="sm:mr-4 font-semibold text-red-400">Veuillez remplir tous les champs pour envoyer votre message</p> : null}
                                <button className="bg-primary-blue-dark px-3 py-1 mt-5 uppercase text-xs font-semibold hover:bg-primary-blue text-neutral-50 transition-all" type="submit">
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <ReCAPTCHA
                        sitekey={CAPTCHA_SITE_KEY}
                        onChange={sendEmail}
                    />
                )}
            </PageTransition>
        </div>
    ) : (
        <div className="flex flex-col w-11/12 mx-auto py-5 justify-center items-center">
            <h3 className="text-lato text-2xl font-light text-neutral-200">{formSubmitted.title}</h3>
            <p className="text-neutral-400">{formSubmitted.paragraph}</p>
        </div>
    );
}

export default Contact;