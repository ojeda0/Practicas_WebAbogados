import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const MapContact = () => {
  return (
    <section id="contacto" className="section-padding bg-dark-950">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-500 uppercase tracking-wide mb-3">Contacto</h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">¿Necesitas asesoramiento legal?</h3>
        <div className="h-1 w-20 bg-gold-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-dark-900 rounded-2xl overflow-hidden shadow-2xl border border-dark-800">
        
        {/* Formulary & Info */}
        <div className="p-8 md:p-12">
          <h4 className="text-2xl font-serif text-white mb-8 border-b border-dark-800 pb-4">Envíanos tu consulta</h4>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nombre completo</label>
                <input type="text" className="w-full bg-dark-950 border border-dark-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors focus:ring-1 focus:ring-gold-500" placeholder="Ej. Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Teléfono</label>
                <input type="tel" className="w-full bg-dark-950 border border-dark-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors focus:ring-1 focus:ring-gold-500" placeholder="+34 600..." />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Correo electrónico</label>
              <input type="email" className="w-full bg-dark-950 border border-dark-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors focus:ring-1 focus:ring-gold-500" placeholder="tu@email.com" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Asunto breve</label>
              <select className="w-full bg-dark-950 border border-dark-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                <option>Derecho Laboral</option>
                <option>Extranjería</option>
                <option>Derecho Civil</option>
                <option>Otro</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Detalles del caso</label>
              <textarea rows="4" className="w-full bg-dark-950 border border-dark-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors focus:ring-1 focus:ring-gold-500" placeholder="Explícanos tu situación..."></textarea>
            </div>
            
            <button type="submit" className="btn-primary w-full shadow-gold-600/20">
              Enviar Consulta Remota
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
              Al enviar este formulario aceptas nuestra política de privacidad y protección de datos.
            </p>
          </form>

          <div className="mt-12 pt-8 border-t border-dark-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="text-gold-500 mt-1" size={20} />
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:manuelortsanz@gmail.com" className="text-gray-400 hover:text-gold-400 text-sm">manuelortsanz@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-gold-500 mt-1" size={20} />
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider mb-1">Horario</p>
                <p className="text-gray-400 text-sm">Lunes - Viernes<br/>09:00 - 14:00 | 16:30 - 20:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[400px] lg:h-auto relative">
          {/* Iframe gratuito de Google Maps configurado para la dirección de Sevilla */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.2183204990927!2d-5.979069724128548!3d37.38466607208643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c04f981ac51%3A0xc66468a3564bd8b7!2sAv.%20Eduardo%20Dato%2C%2044%2C%20Sur%2C%2041005%20Sevilla%2C%20Spain!5e0!3m2!1sen!2s!4v1712711000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.7) contrast(1.2)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Ortiz Abogado"
            className="absolute inset-0 w-full h-full"
          ></iframe>
          
          <div className="absolute bottom-8 left-8 right-8 bg-dark-950/90 backdrop-blur-md p-6 rounded-xl border border-dark-800 shadow-2xl z-10 pointer-events-none">
            <div className="flex items-center gap-4">
              <div className="bg-gold-600/20 p-3 rounded-full flex-shrink-0">
                <MapPin className="text-gold-500" size={24} />
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">Nuestro Despacho</h5>
                <p className="text-gray-400 text-sm">Av. Eduardo Dato, 44<br/>41005 Sevilla, España</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MapContact;
