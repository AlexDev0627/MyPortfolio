import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import SectionLabel from './SectionLabel';

/** Projects section: alternating image/text rows. */
function Projects() {
    return (
        <section
            id="proyectos"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div
                aria-hidden="true"
                className="absolute top-1/2 -right-40 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(255, 107, 26, 0.12) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                }}
            />
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                <SectionLabel index="02">Selected work</SectionLabel>

                <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-20">
                    <div className="md:col-span-7">
                        <h2 className="font-display font-black text-paper text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                            Things I've built{' '}
                            <span className="italic text-mango">recently.</span>
                        </h2>
                    </div>
                    <div className="md:col-span-5 md:pt-3">
                        <p className="font-mono text-sm text-paper-dim leading-relaxed">
                            A small selection of shipped work. Each one taught
                            me something new — and most of them are still live.
                        </p>
                    </div>
                </div>

                <ul className="space-y-20 md:space-y-28">
                    {projects.map((project, i) => {
                        // RTL flip on odd rows to alternate image/text sides
                        const isEven = i % 2 === 0;
                        return (
                            <motion.li
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                            >
                                <article
                                    className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                                        isEven ? '' : 'md:[direction:rtl]'
                                    }`}
                                >
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block md:col-span-7 group relative overflow-hidden border border-[var(--line)] ${
                                            isEven ? '' : 'md:[direction:ltr]'
                                        }`}
                                        aria-label={`Abrir ${project.title} en una nueva pestaña`}
                                    >
                                        <div className="aspect-[16/10] overflow-hidden bg-ink-3">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />
                                        </div>
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-0 bg-mango mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                        />
                                    </a>

                                    <div
                                        className={`md:col-span-5 ${
                                            isEven ? '' : 'md:[direction:ltr]'
                                        }`}
                                    >
                                        <div className="font-mono text-xs text-mango tracking-widest mb-3">
                                            0{i + 1} / 0{projects.length}
                                        </div>
                                        <h3 className="font-display font-bold text-paper text-3xl md:text-4xl leading-tight mb-4">
                                            {project.title}
                                        </h3>
                                        <p className="font-mono text-sm text-paper-dim leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 font-mono text-sm text-mango hover:text-paper transition-colors"
                                        >
                                            <span>Visit project</span>
                                            <span
                                                aria-hidden="true"
                                                className="inline-block transition-transform group-hover:translate-x-1"
                                            >
                                                →
                                            </span>
                                        </a>
                                    </div>
                                </article>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
