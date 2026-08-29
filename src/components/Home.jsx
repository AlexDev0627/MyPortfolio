import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import BlueprintBackground from './BlueprintBackground';
import SpecularButton from './SpecularButton';

/** Hero section: serif display name + typewriter + CTAs. Marquee reveals on scroll. */
function Home() {
    return (
        <section
            id="inicio"
            className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center bg-ink"
        >
            <BlueprintBackground />

            <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full"
                style={{
                    background: 'radial-gradient(circle, var(--mango-glow) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />

            <motion.div
                className="relative z-10 w-full max-w-5xl px-6 md:px-10 flex-1 flex flex-col items-center justify-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div
                    className="flex items-center gap-4 mb-8 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span
                        className="font-mono text-xs tracking-widest"
                        style={{ color: 'var(--mango)' }}
                    >
                        00
                    </span>
                    <span
                        className="font-mono text-xs tracking-[0.2em] uppercase"
                        style={{ color: 'var(--paper-dim)' }}
                    >
                        Hello, my name is
                    </span>
                    <span
                        aria-hidden="true"
                        className="flex-1 h-px"
                        style={{ background: 'var(--line)' }}
                    />
                </motion.div>

                <h1
                    className="font-display font-black leading-[0.95] tracking-tight w-full"
                    style={{ color: 'var(--paper)' }}
                >
                    <motion.span
                        className="block text-6xl md:text-8xl lg:text-[7.5rem]"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Yofrank
                    </motion.span>
                    <motion.span
                        className="block text-6xl md:text-8xl lg:text-[7.5rem] italic"
                        style={{ color: 'var(--mango)' }}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Salas.
                    </motion.span>
                </h1>

                <div
                    className="mt-8 max-w-2xl text-lg md:text-xl font-mono"
                    style={{ color: 'var(--paper-dim)' }}
                >
                    <span style={{ color: 'var(--paper)' }}>Full-stack developer</span>
                    <span aria-hidden="true"> · </span>
                    <TypeAnimation
                        sequence={[
                            'building for the web.',
                            2500,
                            'designing interfaces.',
                            2500,
                            'shipping from Valencia.',
                            2500,
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={Infinity}
                        style={{ color: 'var(--paper)' }}
                    />
                    <span className="cursor-blink" aria-hidden="true" />
                </div>

                <motion.div
                    className="mt-12 flex flex-wrap items-center gap-6 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    <a href="#proyectos" className="inline-block">
                        <SpecularButton
                            size="lg"
                            radius={14}
                            tint="#FF6B1A"
                            tintOpacity={0.08}
                            blur={0}
                            textColor="#bebebeff"
                            lineColor="#FF6B1A"
                            baseColor="#FF6B1A"
                            intensity={1.1}
                            shineSize={12}
                            shineFade={35}
                            thickness={1.2}
                            speed={0.6}
                            followMouse
                            proximity={220}
                            autoAnimate
                        >
                            See projects →
                        </SpecularButton>
                    </a>
                    <a
                        href="#contacto"
                        className="group inline-flex items-center gap-2 font-mono text-sm transition-colors duration-300"
                        style={{ color: 'var(--paper-dim)' }}
                    >
                        <span>or get in touch</span>
                        <span
                            aria-hidden="true"
                            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </a>
                </motion.div>

                <motion.div
                    className="mt-12 md:mt-16 flex flex-wrap items-end justify-between gap-6 pt-6 w-full"
                    style={{ borderTop: '1px solid var(--line-soft)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <div className="flex items-center gap-3">
                        
                        <span
                            className="font-mono text-xs tracking-wide"
                            style={{ color: 'var(--paper-dim)' }}
                        >
                            Available for new projects · 2026
                        </span>
                    </div>
                    <span
                        className="font-mono text-xs"
                        style={{ color: 'var(--paper-dim)' }}
                    >
                        since 2022 — Valencia, VE
                    </span>
                </motion.div>
            </motion.div>

        </section>
    );
}

export default Home;
