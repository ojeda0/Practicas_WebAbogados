import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const ServicePage = ({ title, description, subServices, basePath, headerImage, showBackBtn }) => {
  const location = useLocation();
  // Asegurarnos de que inicie arriba al entrar o cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Actualizar título de la pestaña del navegador
  useEffect(() => {
    document.title = `${title} | Ortiz Abogado en Sevilla`;
  }, [title]);

  return (
    <div className="min-h-screen bg-dark-950 flex flex-col items-center pb-24">
      
      {/* Header Banner */}
      <div className="relative w-full pt-40 pb-24 flex justify-center items-center overflow-hidden border-b border-gold-600/10 shadow-2xl mb-12">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img src={headerImage || "/header_banner.png"} alt={`${title} Background`} className="w-full h-full object-cover opacity-50 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/90 via-dark-950/20 to-dark-950"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/20 to-dark-950/90"></div>
        </div>
        
        {/* Title Content */}
        <div className="relative z-10 w-full px-4 text-center mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 uppercase tracking-wider leading-tight drop-shadow-2xl">
              {title}
            </h1>
            <div className="h-1 w-24 bg-gold-600 mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
          </motion.div>
        </div>
      </div>

      <div className={`max-w-4xl w-full px-4 text-center ${(!subServices || subServices.length === 0) ? 'mt-8 mb-4' : 'mb-16'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {showBackBtn && (
            <div className="text-left mb-10">
              <Link to="/" className="inline-flex items-center text-sm font-sans font-medium text-gold-500 hover:text-gold-400 transition-colors border border-gold-600/30 hover:border-gold-500 px-5 py-2.5 rounded-xl hover:bg-gold-600/5 group shadow-sm">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={16} /> Volver al inicio
              </Link>
            </div>
          )}
          {description && (
            <div className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-4">
              {description}
            </div>
          )}
        </motion.div>
      </div>

      {subServices && subServices.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={subServices.length === 1 ? "flex justify-center w-full" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
            {subServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card group hover:-translate-y-2 bg-dark-900 z-10 relative overflow-hidden flex flex-col h-full ${subServices.length === 1 ? 'w-full max-w-lg' : ''}`}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" />
                   <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-transparent"></div>
                </div>
                
                <div className="relative z-10 h-full flex flex-col p-8 flex-grow">
                  <div className="absolute -top-10 left-0 w-full h-1 bg-transparent group-hover:bg-gold-600 transition-colors"></div>
                  <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-serif text-white mb-3">{service.title}</h4>
                  <p className="text-gray-400 mb-6 text-sm flex-grow">
                    {service.description}
                  </p>
                  <Link to={`${basePath}/${service.id}`} className="inline-flex items-center gap-2 text-sm text-gold-600 font-medium hover:text-gold-400 transition-colors mt-auto">
                    Más información <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`w-full max-w-4xl mx-auto px-4 flex flex-col items-center ${(!subServices || subServices.length === 0) ? 'mt-12' : 'mt-24'}`}
      >
        <div className="h-[1px] w-full max-w-md bg-gold-600/30 mx-auto rounded-full mb-16"></div>
        <a href="/#contacto" className="inline-flex items-center justify-center gap-3 text-lg md:text-xl text-gold-500 font-medium border border-gold-600/50 px-10 py-4 rounded-xl hover:bg-gold-600/10 hover:border-gold-500 hover:text-gold-400 transition-all group shadow-sm hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]">
          Contáctanos <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  );
};

export default ServicePage;
