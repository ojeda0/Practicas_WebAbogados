import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-dark-900 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-800 via-dark-900 to-black opacity-80"></div>
        {/* Abstract Gold Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-900/30 border border-gold-600/30 text-gold-400 text-sm font-medium mb-6">
              <Scale size={16} />
              <span>Protección Legal Integral en Sevilla</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Defendemos tus derechos con <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Firmeza y Experiencia</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Despacho multidisciplinar especializado en Derecho Laboral, Extranjería y Derecho Civil. Tu tranquilidad es nuestra prioridad absoluta.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href="#contacto" className="btn-primary w-full sm:w-auto text-center">
                Solicita una Consulta
              </a>
              <a href="#servicios" className="btn-outline w-full sm:w-auto text-center bg-dark-950/50 backdrop-blur-sm">
                Nuestras Especialidades
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-dark-800">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-sans font-bold text-white tracking-tight mb-1">2<span className="text-gold-500 ml-1.5">+</span></span>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">Años de Experiencia</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-sans font-bold text-white tracking-tight mb-1">98<span className="text-gold-500 ml-1.5">%</span></span>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">Casos de Éxito</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-sans font-bold text-white tracking-tight mb-1">24<span className="text-gold-500 mx-1.5">/</span>7</span>
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">Atención al Cliente</span>
              </div>
            </div>
          </motion.div>

          {/* Right side artistic element or placeholder for lawyer image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="w-[450px] h-[550px] relative rounded-t-full border border-gold-600/20 bg-dark-800 overflow-hidden shadow-2xl shadow-black">
              {/* Imagen Fotorealista Generada */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10"></div>
              <img src="/hero_lawyer.png" alt="Abogado Desk" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
              
              <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
                <div className="bg-dark-950/80 backdrop-blur-md border border-dark-700 p-4 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="bg-gold-600/20 p-3 rounded-full text-gold-500">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold">Máxima Confidencialidad</h4>
                    <p className="text-sm text-gray-400">Trato personalizado</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
