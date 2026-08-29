import { useState } from 'react';
import { navItems } from '../data/navigation';

/** Fixed top bar: <Yofrank /> logo, nav with soft hover, mango CTA. */
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-ink/85 backdrop-blur-md border-b border-[var(--line)]">
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
                <a
                    href="#inicio"
                    className="group flex items-center font-mono text-base md:text-lg leading-none tracking-tight"
                    aria-label="Inicio"
                >
                    <span
                        className="transition-transform duration-300 group-hover:-translate-x-0.5"
                        style={{ color: 'var(--mango)' }}
                    >
                        {'<'}
                    </span>
                   
                    <span
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                        style={{ color: 'var(--mango)' }}
                    >
                        {'/>'}
                    </span>
                </a>

                <nav
                    aria-label="Navegación principal"
                    className="hidden md:flex items-center"
                >
                    {navItems.map((item, i) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className="group relative px-4 py-2 font-mono text-xs tracking-wide transition-colors duration-300 ease-out"
                            style={{ color: 'var(--paper-dim)' }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--paper)')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--paper-dim)')}
                        >
                            <span
                                className="mr-2 inline-block opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
                                style={{ color: 'var(--mango)' }}
                            >
                                0{i + 1}
                            </span>
                            {item.label}
                            <span
                                aria-hidden="true"
                                className="absolute left-1/2 right-1/2 bottom-1 h-px group-hover:left-3 group-hover:right-3 transition-all duration-500 ease-out"
                                style={{ background: 'var(--mango)' }}
                            />
                        </a>
                    ))}
                </nav>

                <a
                    href="#contacto"
                    className="hidden md:inline-flex items-center gap-2 font-mono text-xs px-4 py-2 border transition-all duration-300 ease-out hover:shadow-[0_0_20px_var(--mango-glow)]"
                    style={{
                        borderColor: 'var(--mango)',
                        color: 'var(--mango)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--mango)';
                        e.currentTarget.style.color = 'var(--ink)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--mango)';
                    }}
                >
                    <span>Contact</span>
                    <span aria-hidden="true">→</span>
                </a>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-2 -mr-2"
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                >
                    <span
                        className={`block w-5 h-px transition-transform duration-300 ${menuOpen ? 'translate-y-[3px] rotate-45' : ''}`}
                        style={{ background: 'var(--paper)' }}
                    />
                    <span
                        className={`block w-5 h-px transition-transform duration-300 ${menuOpen ? '-translate-y-[3px] -rotate-45' : ''}`}
                        style={{ background: 'var(--paper)' }}
                    />
                </button>
            </div>

            {menuOpen && (
                <div
                    className="md:hidden border-t bg-ink"
                    style={{ borderColor: 'var(--line)' }}
                >
                    <nav
                        aria-label="Navegación móvil"
                        className="px-6 py-4 flex flex-col"
                    >
                        {navItems.map((item, i) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="group flex items-baseline gap-3 py-3 border-b last:border-0 transition-colors duration-300"
                                style={{ borderColor: 'var(--line-soft)' }}
                            >
                                <span
                                    className="font-mono text-xs"
                                    style={{ color: 'var(--mango)' }}
                                >
                                    0{i + 1}
                                </span>
                                <span
                                    className="font-display text-lg transition-colors duration-300"
                                    style={{ color: 'var(--paper)' }}
                                >
                                    {item.label}
                                </span>
                            </a>
                        ))}
                        <a
                            href="#contacto"
                            onClick={() => setMenuOpen(false)}
                            className="mt-4 inline-flex items-center justify-center gap-2 font-mono text-sm px-4 py-3 border transition-all duration-300"
                            style={{
                                borderColor: 'var(--mango)',
                                color: 'var(--mango)',
                            }}
                        >
                            <span>Get in touch</span>
                            <span aria-hidden="true">→</span>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
