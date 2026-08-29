import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

/** About section: serif headline + bio. */
function About() {
    return (
        <section
            id="sobre-mi"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(196, 245, 66, 0.10) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <SectionLabel index="01">Sobre mí</SectionLabel>

                <div className="grid md:grid-cols-12 gap-12 md:gap-16">
                    <div className="md:col-span-5">
                        <motion.h2
                            className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
                            style={{ color: 'var(--paper)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            I build{' '}
                            <span className="italic" style={{ color: 'var(--mango)' }}>
                                tools
                            </span>{' '}
                            for the web.
                        </motion.h2>
                    </div>

                    <div className="md:col-span-7">
                        <motion.div
                            className="space-y-5 text-lg leading-relaxed font-mono"
                            style={{ color: 'var(--paper-dim)' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <p>
                                I'm a full-stack developer based in{' '}
                                <span style={{ color: 'var(--paper)' }}>
                                    Valencia, Venezuela
                                </span>
                                . I like turning ideas into working software — usually
                                with React on the front, Node on the back, and a
                                generous amount of CSS in between.
                            </p>
                            <p>
                                My current focus is on shipping fast, accessible
                                interfaces with a sharp eye for typography and motion.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
