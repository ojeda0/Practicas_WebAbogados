import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Reseñas', href: '#resenas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-950/95 backdrop-blur-md shadow-lg shadow-black/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center gap-4 group">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border border-gold-600/30 group-hover:border-gold-500 flex items-center justify-center bg-dark-900 transition-all shadow-lg shadow-gold-600/10">
                <span className="absolute text-[9px] text-gray-600 text-center leading-tight px-1 font-sans">Añadir logo.png en public/</span>
                <img src="/logo.png?v=2" alt="Ortiz Abogado Logo" className="absolute inset-0 h-full w-full object-contain z-10 transition-transform group-hover:scale-105 bg-dark-900" onError={(e) => e.target.style.opacity = '0'} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase leading-tight">Ortiz Abogado</span>
                <span className="text-gold-500 text-[11px] tracking-widest uppercase mt-0.5">Despacho Jurídico</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a href="#contacto" className="btn-primary text-sm py-2 px-5">
              Consulta Gratuita
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-gold-500 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-dark-950 border-t border-dark-800 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-gold-500 hover:bg-dark-800 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary block text-center w-full">
              Consulta Gratuita
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
