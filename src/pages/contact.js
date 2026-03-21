// Imports
import emailjs from '@emailjs/browser';
import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import styles from './contact.module.css';

// Logic
export default function Contact() {
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [values, setValues] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formFailed, setFormFailed] = useState(false);

    const getFieldLabel = (field) => {
        switch (field) {
            case 'name':
                return 'Name';
            case 'email':
                return 'Email';
            case 'message':
                return 'Message';
            default:
                return field;
        }
    };

    const getValidationMessage = (field, value) => {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            switch (field) {
                case 'name':
                    return 'Please enter your name.';
                case 'email':
                    return 'Please enter your email address.';
                case 'message':
                    return 'Please enter a message.';
                default:
                    return 'This field is required.';
            }
        }

        if (field === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(trimmedValue)) {
                return 'Please enter a valid email address.';
            }
        }

        if (field === 'name' && trimmedValue.length < 2) {
            return 'Name must be at least 2 characters.';
        }

        if (field === 'message' && trimmedValue.length < 10) {
            return 'Message must be at least 10 characters.';
        }

        return '';
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [id]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [id]: '',
        }));

        setFormSubmitted(false);
        setFormFailed(false);
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        const message = getValidationMessage(id, value);

        setErrors((prev) => ({
            ...prev,
            [id]: message,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nextErrors = {
            name: getValidationMessage('name', values.name),
            email: getValidationMessage('email', values.email),
            message: getValidationMessage('message', values.message),
        };

        setErrors(nextErrors);
        setFormSubmitted(false);
        setFormFailed(false);

        const firstInvalidField = ['name', 'email', 'message'].find(
            (field) => nextErrors[field]
        );

        if (firstInvalidField) {
            const element = document.getElementById(firstInvalidField);
            if (element) element.focus();
            return;
        }

        try {
            const payload = {
                name: values.name.trim(),
                email: values.email.trim(),
                message: values.message.trim(),
            };

            const response = await emailjs.send(
                'service_5dcycdp',
                'template_nfn1fxf',
                payload,
                'u0Z_56VLO3UwzMrIs'
            );

            console.log('Email sent successfully!', response.status, response.text);

            setValues({ name: '', email: '', message: '' });
            setErrors({ name: '', email: '', message: '' });
            setFormSubmitted(true);
            setFormFailed(false);
        } catch (err) {
            console.error('EmailJS error:', err);
            setFormFailed(true);
            setFormSubmitted(false);
        }
    };

    // Markup
    return (
        <div className={styles.page}>
            <Head>
                <title>Contact | Sesame Legal</title>
                <meta
                    name="description"
                    content="Contact Sesame Legal for general enquiries, feedback, or questions about our legal information and resources."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/contact" />

                <meta property="og:title" content="Contact | Sesame Legal" />
                <meta
                    property="og:description"
                    content="Contact Sesame Legal for general enquiries, feedback, or questions."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sesamelegal.com/contact" />
                <meta
                    property="og:image"
                    content="https://www.sesamelegal.com/social-preview-1200x630.png"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact | Sesame Legal" />
                <meta
                    name="twitter:description"
                    content="Contact Sesame Legal for general enquiries, feedback, or questions."
                />
                <meta
                    name="twitter:image"
                    content="https://www.sesamelegal.com/social-preview-1200x630.png"
                />
            </Head>

            <main id="main-content" className={styles.main}>
                <section className={styles.hero} aria-labelledby="contact-heading">
                    <p className={styles.eyebrow}>Contact</p>

                    <h1 id="contact-heading" className={styles.title}>
                        Get in touch
                    </h1>

                    <div className={styles.content}>
                        <p className={styles.intro}>
                            Use the form below to send a message and we will get back to you as
                            soon as possible.
                        </p>

                        <form
                            className={styles['contact-form']}
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            {['name', 'email', 'message'].map((field) => {
                                const hasError = Boolean(errors[field]);
                                const label = getFieldLabel(field);

                                return (
                                    <div
                                        key={field}
                                        className={`${styles['form-group']} ${hasError ? styles['form-group-error'] : ''
                                            }`}
                                    >
                                        {field !== 'message' ? (
                                            <input
                                                type={field === 'email' ? 'email' : 'text'}
                                                id={field}
                                                name={field}
                                                placeholder=" "
                                                maxLength={100}
                                                value={values[field]}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                                aria-invalid={hasError}
                                                aria-describedby={
                                                    hasError ? `${field}-error` : `${field}-hint`
                                                }
                                            />
                                        ) : (
                                            <textarea
                                                id="message"
                                                name="message"
                                                placeholder=" "
                                                rows={6}
                                                maxLength={500}
                                                value={values.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                required
                                                aria-invalid={hasError}
                                                aria-describedby={
                                                    hasError ? 'message-error' : 'message-hint'
                                                }
                                            />
                                        )}

                                        <label htmlFor={field}>{label}</label>

                                        {!hasError && (
                                            <div
                                                id={`${field}-hint`}
                                                className={styles['field-hint']}
                                            >
                                                {field === 'message'
                                                    ? 'A short summary is fine.'
                                                    : '\u00A0'}
                                            </div>
                                        )}

                                        {hasError && (
                                            <div
                                                id={`${field}-error`}
                                                className={styles['error-text']}
                                                role="alert"
                                            >
                                                <span
                                                    className={styles['error-badge']}
                                                    aria-hidden="true"
                                                >
                                                    !
                                                </span>
                                                <span>{errors[field]}</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {formSubmitted && (
                                <div
                                    className={styles['success-message']}
                                    aria-live="polite"
                                    role="status"
                                >
                                    <strong>Message sent.</strong>
                                    <span>
                                        Thanks for reaching out. Your message has been sent
                                        successfully.
                                    </span>
                                </div>
                            )}

                            {formFailed && (
                                <div
                                    className={styles['error-message']}
                                    aria-live="polite"
                                    role="status"
                                >
                                    <strong>Message not sent.</strong>
                                    <span>
                                        Sorry, something went wrong. Please try again in a moment.
                                    </span>
                                </div>
                            )}

                            <button type="submit" className={styles['submit-button']}>
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}