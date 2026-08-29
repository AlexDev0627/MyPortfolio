import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/contact';
import SectionLabel from './SectionLabel';

/** Contact section: headline + contact info + minimal form (Formspree). */
function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 4000);
    };

    return (
        <section
            id="contacto"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 107, 26, 0.10) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <div
                aria-hidden="true"
                className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(196, 245, 66, 0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <SectionLabel index="03">Get in touch</SectionLabel>

                <div className="grid md:grid-cols-12 gap-12 md:gap-16">
                    <div className="md:col-span-5 ">
                        <h2 className="font-display font-black text-paper text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8">
                            Have a project{' '}
                            <span className="italic text-mango">in mind?</span>
                        </h2>

                        <p className="font-mono text-sm text-paper-dim leading-relaxed mb-10">
                            I take on a few projects each quarter. Send a brief,
                            a deadline, and a budget — I'll get back within 48
                            hours.
                        </p>

                        <dl className="space-y-4 font-mono text-sm">
                            <div>
                                <dt className="text-paper-dim text-xs uppercase tracking-widest mb-1">
                                    Email
                                </dt>
                                <dd>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-paper hover:text-mango transition-colors"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-paper-dim text-xs uppercase tracking-widest mb-1">
                                    Based in
                                </dt>
                                <dd className="text-paper">{contactInfo.location}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="md:col-span-7">
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            onSubmit={handleSubmit}
                            action="https://formspree.io/f/yourformid"
                            method="POST"
                            className="space-y-8"
                        >
                            <Field
                                id="name"
                                label="Name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                            />
                            <Field
                                id="email"
                                name="_replyto"
                                label="Email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                            />
                            <Field
                                id="message"
                                label="Message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project…"
                                multiline
                            />

                            <div className="flex items-center justify-between pt-4">
                                <p className="font-mono text-xs text-paper-dim">
                                    {submitted ? (
                                        <span className="text-lime">
                                            ✓ Thanks — I'll reply soon.
                                        </span>
                                    ) : (
                                        'Replies within 48 hours.'
                                    )}
                                </p>
                                <button
                                    type="submit"
                                    className="group inline-flex items-center gap-2 font-mono text-sm px-6 py-3 border border-mango text-mango hover:bg-mango hover:text-ink transition-colors"
                                >
                                    <span>Send message</span>
                                    <span
                                        aria-hidden="true"
                                        className="inline-block transition-transform group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Field({ id, name, label, type = 'text', value, onChange, placeholder, multiline = false }) {
    const sharedProps = {
        id,
        name: name || id,
        value,
        onChange,
        placeholder,
        required: true,
        className:
            'w-full bg-transparent text-paper font-mono text-base placeholder:text-paper-dim/40 ' +
            'border-b border-[var(--line)] focus:border-mango focus:outline-none py-3 transition-colors',
    };

    return (
        <div>
            <label
                htmlFor={id}
                className="block font-mono text-xs text-paper-dim uppercase tracking-widest mb-2"
            >
                {label}
            </label>
            {multiline ? (
                <textarea {...sharedProps} rows="4" />
            ) : (
                <input type={type} {...sharedProps} />
            )}
        </div>
    );
}

export default Contact;
