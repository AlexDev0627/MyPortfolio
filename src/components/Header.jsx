import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ['Products', 'Services', 'Pricing', 'About'];

    return (
        <>

            <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
                <nav className="bg-transparent/80 backdrop-blur-xl border-[1px] border-blue-500/20 rounded-full px-6 py-1 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:border-blue-500/35">
                    
                    <a href="#" className="flex items-center gap-2 group text-decoration-none">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-transform duration-300 group-hover:scale-125" />
                        <span className="text-slate-100 font-semibold text-[16px] tracking-tight group-hover:text-cyan-300 transition-colors">
                            Alex<span className="text-blue-400 font-normal">Dev</span>
                        </span>
                    </a>

                    <div className="hidden md:flex items-center gap-1 ">
                        {navItems.map((item) => (
                            <a 
                                key={item} 
                                href="#" 
                                className="px-4 py-1.5 rounded-full text-xs font-medium text-white decoration-none hover:text-white hover:bg-blue-600/20 transition-all duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* 3. Botón CTA Profesional */}
                    <div className="hidden md:flex items-center">
                        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-medium text-white rounded-full group  cursor-pointer border-0">
                            <span className="px-4 py-2 transition-all ease-in duration-95 bg-white/1 rounded-full group-hover:bg-cyan-500 text-slate-100 font-semibold">
                                Get Started
                            </span>
                        </button>
                    </div>

                    {/* Botón Menú Mobile */}
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-1.5"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-slate-200 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-slate-200 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-slate-200 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </nav>

                {/* Desplegable Mobile para Tema Oscuro */}
                {menuOpen && (
                    <div className="mt-3 bg-slate-950/90 backdrop-blur-2xl border border-blue-500/20 rounded-2xl p-4 flex flex-col gap-1 md:hidden shadow-2xl transition-all">
                        {navItems.map((item) => (
                            <a 
                                key={item} 
                                href="#" 
                                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-blue-600/20 transition-colors"
                            >
                                {item}
                            </a>
                        ))}
                        <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold py-2.5 rounded-xl border-0 mt-2 cursor-pointer shadow-md">
                            Get Started
                        </button>
                    </div>
                )}
            </header>
        </>
    );
}