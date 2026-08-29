import React from 'react';
import { contactInfo } from '../data/contact';
import { navItems } from '../data/navigation';

/** Footer: <Yofrank /> branding + nav index + social links. Mango top border. */
function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative border-t-2 overflow-hidden"
            style={{ borderColor: 'var(--mango)' }}
        >
            <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(255, 107, 26, 0.10) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />

            <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16">
                <div className="grid md:grid-cols-12 gap-10 md:gap-12">
                    {/* Branding con estilo <Yofrank /> */}
                    <div className="md:col-span-5">
                        <a
                            href="#inicio"
                            className="group inline-flex items-center font-mono text-3xl md:text-4xl leading-none tracking-tight"
                        >
                            <span
                                className="transition-transform duration-300 group-hover:-translate-x-1"
                                style={{ color: 'var(--mango)' }}
                            >
                                {'<'}
                            </span>
                            <span
                                className="font-display font-bold  transition-colors duration-300"
                                style={{ color: 'var(--paper)' }}
                            >
                                
                            </span>
                            <span
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                style={{ color: 'var(--mango)' }}
                            >
                                {'/>'}
                            </span>
                        </a>
                        <p
                            className="mt-4 font-mono text-sm leading-relaxed max-w-sm"
                            style={{ color: 'var(--paper-dim)' }}
                        >
                            Full-stack developer building tools for the web,
                            from Valencia, Venezuela.
                        </p>
                    </div>

                    {/* Nav Index */}
                    <div className="md:col-span-3">
                        <h4
                            className="font-mono text-xs uppercase tracking-widest mb-4"
                            style={{ color: 'var(--paper-dim)' }}
                        >
                            Index
                        </h4>
                        <ul className="space-y-2">
                            {navItems.map((item, i) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        className="group inline-flex items-baseline gap-2 font-mono text-sm transition-colors duration-300"
                                        style={{ color: 'var(--paper)' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--mango)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--paper)')}
                                    >
                                        <span
                                            className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ color: 'var(--mango)' }}
                                        >
                                            0{i + 1}
                                        </span>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social links */}
                    <div className="md:col-span-4">
                        <h4
                            className="font-mono text-xs uppercase tracking-widest mb-4"
                            style={{ color: 'var(--paper-dim)' }}
                        >
                            Elsewhere
                        </h4>
                        <ul className="space-y-2">
                            {contactInfo.social.map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.url}
                                        target={social.url !== '#' ? '_blank' : undefined}
                                        rel={social.url !== '#' ? 'noopener noreferrer' : undefined}
                                        className="group inline-flex items-center gap-3 font-mono text-sm transition-colors duration-300"
                                        style={{ color: 'var(--paper)' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--mango)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--paper)')}
                                    >
                                        <i
                                            aria-hidden="true"
                                            className={`bi ${social.icon} transition-colors duration-300`}
                                            style={{ color: 'var(--paper-dim)' }}
                                        />
                                        {social.name}
                                        {social.url !== '#' && (
                                            <span
                                                aria-hidden="true"
                                                className="text-xs"
                                                style={{ color: 'var(--paper-dim)' }}
                                            >
                                                ↗
                                            </span>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-16 pt-6 flex flex-wrap items-center justify-between gap-4"
                    style={{ borderTop: '1px solid var(--line-soft)' }}
                >
                    <p
                        className="font-mono text-xs"
                        style={{ color: 'var(--paper-dim)' }}
                    >
                        © {currentYear} Yofrank Salas. All rights reserved.
                    </p>
                    <p
                        className="font-mono text-xs"
                        style={{ color: 'var(--paper-dim)' }}
                    >
                         · Deployed from Venezuela
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
