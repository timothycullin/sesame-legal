import Head from 'next/head';
import { useState } from 'react';
import Footer from '../components/Footer';
import styles from './contact.module.css';

export default function Contact() {
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [values, setValues] = useState({ name: '', email: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...values, [id]: value });
        setErrors({ ...errors, [id]: '' }); // clear tooltip while typing
        setFormSubmitted(false); // hide success message while typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newErrors = {};
        let firstInvalidField = null;

        // Loop through inputs and textareas
        Array.from(form.elements).forEach((el) => {
            if ((el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') && !firstInvalidField) {
                if (!el.checkValidity()) {
                    newErrors[el.id] = el.validationMessage; // show browser message
                    firstInvalidField = el; // mark first invalid field
                }
            }
        });

        setErrors(newErrors);

        if (firstInvalidField) {
            firstInvalidField.focus(); // scroll & open keyboard on mobile
        } else {
            console.log('Form submitted:', values);
            setValues({ name: '', email: '', message: '' });
            setErrors({ name: '', email: '', message: '' });
            setFormSubmitted(true); // show success message
        }
    };

    return (
        <div className="page-container">
            {/* Minimal self-contained SEO */}
            <Head>
                <title>Contact Sesame Legal | IVO Tips & Blog</title>
                <meta
                    name="description"
                    content="Get in touch with Sesame Legal for guidance on Intervention Orders, human rights, and related resources."
                />
                <link rel="canonical" href="https://www.sesamelegal.com/contact" />
            </Head>

            <main className={styles['contact-container']}>
                <h1>Get in touch</h1>

                <section aria-label="Contact Form">
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
                                        maxLength={field === 'name' || field === 'email' ? 100 : 500}
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
                                        aria-describedby={errors.message ? `message-error` : undefined}
                                    />
                                )}

                                <label htmlFor={field}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>

                                {errors[field] && (
                                    <div id={`${field}-error`} className={styles['error-tooltip']}>
                                        {errors[field]}
                                    </div>
                                )}
                            </div>
                        ))}

                        {formSubmitted && (
                            <div className={styles['success-message']}>
                                Thanks! Your message has been sent.
                            </div>
                        )}

                        <button type="submit" className={styles['submit-button']}>
                            Send
                        </button>
                    </form>
                </section>
            </main>

            <Footer />
        </div>
    );
}
