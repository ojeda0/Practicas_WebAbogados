import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ya aceptó/rechazó las cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Pequeño retraso para que no aparezca al instante
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-dark-950/95 backdrop-blur-xl border border-dark-700 rounded-2xl shadow-2xl shadow-black/50 p-6 md:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              
              {/* Icono */}
              <div className="hidden md:flex bg-gold-600/10 border border-gold-600/20 p-3 rounded-xl text-gold-500 shrink-0">
                <Shield size={28} />
              </div>

              {/* Texto */}
              <div className="flex-grow">
                <h4 className="text-white font-sans font-bold text-base mb-2 flex items-center gap-2">
                  <Shield size={18} className="text-gold-500 md:hidden" />
                  Política de Cookies
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación, analizar el tráfico y personalizar el contenido. Puedes configurar tus preferencias o aceptar todas. Para más información, consulta nuestra{' '}
                  <Link to="/privacidad" className="text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors">
                    Política de Privacidad
                  </Link>.
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
                <button
                  onClick={handleReject}
                  className="flex-1 lg:flex-none px-4 py-2.5 text-xs font-medium text-gray-400 border border-dark-700 rounded-xl hover:bg-dark-800 hover:text-white hover:border-dark-600 transition-all whitespace-nowrap"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleNecessary}
                  className="flex-1 lg:flex-none px-4 py-2.5 text-xs font-medium text-gray-300 border border-dark-600 rounded-xl hover:bg-dark-800 hover:text-white hover:border-dark-500 transition-all whitespace-nowrap"
                >
                  Solo necesarias
                </button>
                <button
                  onClick={handleAccept}
                  className="w-full lg:w-auto px-6 py-2.5 text-sm font-bold text-dark-950 bg-gold-500 rounded-xl hover:bg-gold-400 transition-all shadow-lg shadow-gold-600/20 whitespace-nowrap"
                >
                  Aceptar todas
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
