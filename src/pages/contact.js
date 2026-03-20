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

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
        setErrors({ ...errors, [id]: '' });
        setFormSubmitted(false);
        setFormFailed(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newErrors = {};
        let firstInvalidField = null;

        Array.from(form.elements).forEach((el) => {
            if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && !firstInvalidField) {
                if (!el.checkValidity()) {
                    newErrors[el.id] = el.validationMessage;
                    firstInvalidField = el;
                }
            }
        });

        setErrors(newErrors);

        if (firstInvalidField) {
            firstInvalidField.focus();
        } else {
            emailjs.send(
                'service_5dcycdp',
                'template_nfn1fxf',
                values,
                'u0Z_56VLO3UwzMrIs'
            )
                .then((response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    setValues({ name: '', email: '', message: '' });
                    setErrors({ name: '', email: '', message: '' });
                    setFormSubmitted(true);
                    setFormFailed(false);
                })
                .catch((err) => {
                    console.error('EmailJS error:', err);
                    setFormFailed(true);
                    setFormSubmitted(false);
                });
        }
    };

    // Markup
    return (
        <div className="page-container">
            <Head>
                <title>Contact Sesame Legal</title>
                <meta
                    name="description"
                    content="Contact Sesame Legal for general enquiries, feedback, or questions about our legal information and resources."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/contact" />
            </Head>

            <main id="main-content" className={styles.main}>
                <section className={styles.hero} aria-labelledby="contact-heading">
                    <p className={styles.eyebrow}>Contact</p>

                    <h1 id="contact-heading" className={styles.title}>
                        Get in touch
                    </h1>

                    <div className={styles['content-card']}>
                        <p className={styles.intro}>
                            Use the form below to send a message and we will get back to you as soon as possible.
                        </p>

                        <form
                            className={styles['contact-form']}
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            {['name', 'email', 'message'].map((field) => (
                                <div key={field} className={styles['form-group']}>
                                    {field !== 'message' ? (
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            id={field}
                                            placeholder=" "
                                            maxLength={100}
                                            value={values[field]}
                                            onChange={handleChange}
                                            required
                                            aria-invalid={!!errors[field]}
                                            aria-describedby={errors[field] ? `${field}-error` : undefined}
                                        />
                                    ) : (
                                        <textarea
                                            id="message"
                                            placeholder=" "
                                            rows={6}
                                            maxLength={500}
                                            value={values.message}
                                            onChange={handleChange}
                                            required
                                            aria-invalid={!!errors[field]}
                                            aria-describedby={errors.message ? 'message-error' : undefined}
                                        />
                                    )}

                                    <label htmlFor={field}>
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>

                                    {errors[field] && (
                                        <div
                                            id={`${field}-error`}
                                            className={styles['error-text']}
                                        >
                                            {errors[field]}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {formSubmitted && (
                                <div className={styles['success-message']} aria-live="polite" role="status">
                                    Thanks. Your message has been sent.
                                </div>
                            )}

                            {formFailed && (
                                <div className={styles['error-message']} aria-live="polite" role="status">
                                    Sorry, your message could not be sent. Please try again later.
                                </div>
                            )}

                            <button type="submit" className={styles['submit-button']}>
                                Send
                            </button>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}