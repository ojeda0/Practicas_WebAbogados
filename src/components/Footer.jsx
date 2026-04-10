import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-950 border-t border-dark-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Logo & About */}
          <div className="lg:col-span-4 lg:pr-6">
            <a href="#inicio" className="flex items-center gap-4 mb-6 group w-max">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border border-gold-600/30 group-hover:border-gold-500 flex items-center justify-center bg-dark-900 transition-all shadow-lg shadow-gold-600/10 shrink-0">
                <span className="absolute text-[9px] text-gray-600 text-center leading-tight px-1 font-sans">Logo</span>
                <img src="/logo.png?v=2" alt="Ortiz Abogado Logo" className="absolute inset-0 h-full w-full object-contain z-10 transition-transform group-hover:scale-105 bg-dark-900" onError={(e) => e.target.style.opacity = '0'} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase leading-tight">Ortiz Abogado</span>
                <span className="text-gold-500 text-[11px] tracking-widest uppercase mt-0.5">Despacho Jurídico</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Despacho jurídico en Sevilla distinguido por el compromiso inquebrantable con la defensa de los derechos de nuestros clientes.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/ortizabogado" target="_blank" rel="noopener noreferrer" className="bg-dark-900 border border-dark-700 p-2 rounded-full text-gray-400 hover:text-gold-500 hover:border-gold-500/50 transition-all flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="mailto:manuelortsanz@gmail.com" className="bg-dark-900 border border-dark-700 p-2 rounded-full text-gray-400 hover:text-gold-500 hover:border-gold-500/50 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div className="lg:col-span-2">
            <h5 className="text-white font-bold mb-6 font-serif tracking-wide">Navegación</h5>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-gold-500 text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-gold-500 text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Servicios</a></li>
              <li><a href="#quienes-somos" className="text-gray-400 hover:text-gold-500 text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Quiénes Somos</a></li>
              <li><a href="#equipo" className="text-gray-400 hover:text-gold-500 text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Equipo</a></li>
              <li><a href="#resenas" className="text-gray-400 hover:text-gold-500 text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Reseñas</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-gold-500 text-sm transition-colors flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Contacto</a></li>
            </ul>
          </div>

          {/* Especialidades */}
          <div className="lg:col-span-3">
            <h5 className="text-white font-bold mb-6 font-serif tracking-wide">Especialidades</h5>
            <ul className="space-y-3">
              <li><a href="#servicios" className="text-gray-400 text-sm flex items-center gap-2 hover:text-gold-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Derecho Laboral</a></li>
              <li><a href="#servicios" className="text-gray-400 text-sm flex items-center gap-2 hover:text-gold-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Extranjería e Inmigración</a></li>
              <li><a href="#servicios" className="text-gray-400 text-sm flex items-center gap-2 hover:text-gold-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Derecho Civil y Familia</a></li>
              <li><a href="#servicios" className="text-gray-400 text-sm flex items-center gap-2 hover:text-gold-500 transition-colors"><div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0"></div>Derecho Penal</a></li>
            </ul>
          </div>

          {/* Contacto Directo */}
          <div className="lg:col-span-3">
            <h5 className="text-white font-bold mb-6 font-serif tracking-wide">Despacho</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-gold-600 mt-1 flex-shrink-0" />
                <span>Avenida Eduardo Dato, 44<br/>41005 Sevilla, España</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-gold-600 flex-shrink-0" />
                <a href="mailto:manuelortsanz@gmail.com" className="hover:text-gold-500 transition-colors">manuelortsanz@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-dark-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Ortiz Abogado. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gold-500 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
