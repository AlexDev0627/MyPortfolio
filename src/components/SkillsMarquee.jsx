import { skills } from '../data/skills';
import { skillIconMap } from '../data/skillIcons';

/** Infinite horizontal marquee. B&N idle, color + lift on hover. */
export default function SkillsMarquee() {
    // Duplicated to make the -50% translate loop seamlessly
    const looped = [...skills, ...skills];

    return (
        <section className="relative w-full py-20 md:py-24">
            <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10">
                <h2
                    className="font-display text-3xl md:text-4xl lg:text-5xl"
                    style={{ color: 'var(--paper)' }}
                >
                    Skills{' - '}
                    <span
                        className="italic text-lg md:text-xl lg:text-2xl"
                        style={{ color: 'var(--mango)' }}
                    >
                         Tools I work with
                    </span>
                </h2>
            </div>

            <div
                className="relative w-full overflow-hidden"
                aria-label="Stack tecnológico"
            >
                <div
                    className="relative w-full"
                    style={{
                        maskImage:
                            'linear-gradient(to right, transparent 0, black 18%, black 82%, transparent 100%)',
                        WebkitMaskImage:
                            'linear-gradient(to right, transparent 0, black 18%, black 82%, transparent 100%)',
                    }}
                >
                    <div className="marquee-track flex w-max items-center gap-16 md:gap-20 py-2">
                        {looped.map((name, i) => {
                            const svgString = skillIconMap[name];
                            const isDuplicate = i >= skills.length;
                            return (
                                <div
                                    key={`${name}-${i}`}
                                    className="skill-cell group flex items-center gap-4 shrink-0"
                                    aria-hidden={isDuplicate ? 'true' : undefined}
                                >
                                    <div
                                        className="skill-icon-wrap w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                                        data-skill={name}
                                        dangerouslySetInnerHTML={{ __html: svgString }}
                                    />
                                    <span
                                        className="skill-label font-mono text-sm md:text-base tracking-wide whitespace-nowrap select-none"
                                        style={{ color: 'var(--paper-dim)' }}
                                    >
                                        {name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
