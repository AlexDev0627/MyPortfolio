/**
 * SectionLabel
 * Etiqueta de sección con índice numérico y línea horizontal — recuerda
 * a los rótulos de planos de ingeniería. Usada al tope de cada sección.
 */
export default function SectionLabel({ index, children }) {
    return (
        <div className="flex items-center gap-4 mb-10">
            <span
                className="font-mono text-mango tracking-widest text-xs"
                aria-hidden="true"
            >
                {index}
            </span>
            <span
                className="font-mono text-paper-dim text-xs tracking-[0.2em] uppercase"
            >
                {children}
            </span>
            <span
                aria-hidden="true"
                className="flex-1 h-px bg-[var(--line)]"
            />
        </div>
    );
}
