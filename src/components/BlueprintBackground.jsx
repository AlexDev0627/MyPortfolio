/**
 * BlueprintBackground
 * Cuadrícula sutil de líneas finas 1px — papel de ingeniería, no dots genéricos.
 * Implementado en CSS puro: cero JS, costo cero en runtime, perfectamente
 * responsivo y sin libs de canvas/WebGL.
 */
export default function BlueprintBackground({ className = '' }) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 ${className}`}
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(42, 51, 64, 0.5) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(42, 51, 64, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '64px 64px',
                maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            }}
        />
    );
}
