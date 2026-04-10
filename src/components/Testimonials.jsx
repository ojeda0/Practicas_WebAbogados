import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Carlos M.",
      text: "Un equipo excepcional. Me solucionaron un problema laboral muy estancado de forma rápida y profesional. Se nota la experiencia.",
      rating: 5,
      role: "Cliente Área Laboral"
    },
    {
      name: "Laura D.",
      text: "Muy recomendables para temas de extranjería. Trato muy cercano y empatía total, que es lo que más se agradece en estos casos.",
      rating: 5,
      role: "Cliente Extranjería"
    },
    {
      name: "José A.",
      text: "Seriedad, claridad a la hora de explicarte las opciones legales y muy contundentes en sala. Ganaron mi divorcio con gran diligencia.",
      rating: 5,
      role: "Cliente Civil"
    },
    {
      name: "María T.",
      text: "Acudí por un asunto penal complejo y desde el primer día me transmitieron seguridad. Su defensa fue brillante resultando en la absolución.",
      rating: 5,
      role: "Cliente Penal"
    },
    {
      name: "Antonio P.",
      text: "Su transparencia con los honorarios y la viabilidad del caso es algo que valoro inmensamente. Grandes profesionales.",
      rating: 5,
      role: "Empresa"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="resenas" className="section-padding bg-dark-900 border-t border-dark-800 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="text-center mb-16 max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-500 uppercase tracking-wide mb-3">Reseñas</h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">Lo que dicen nuestros clientes</h3>
        <p className="text-gray-400">Nuestro mayor aval es el porcentaje de casos de éxito y la satisfacción de quienes confiaron en nosotros sus momentos más complicados.</p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 px-4 md:px-12">
        <div className="relative bg-dark-800/80 backdrop-blur-sm px-8 py-12 md:p-16 rounded-2xl shadow-2xl border border-dark-700 min-h-[320px] flex items-center justify-center">
            
          <button onClick={prev} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-dark-900 border border-gold-600/30 text-gold-500 hover:bg-gold-600 hover:text-dark-950 p-2 md:p-3 rounded-full transition-all z-20 shadow-xl flex items-center justify-center" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full relative px-6 md:px-2"
            >
              <Quote size={60} className="absolute -top-4 -right-4 md:-top-4 md:-right-4 text-gold-600/20 pointer-events-none" />
              
              <div className="flex justify-start gap-1 mb-8">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-gold-500 text-gold-500" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-200 italic mb-10 leading-relaxed text-left font-serif relative z-10">"{reviews[currentIndex].text}"</p>
              
              <div className="text-left border-t border-dark-700/50 pt-8">
                <h5 className="text-lg font-bold text-white font-serif mb-1">{reviews[currentIndex].name}</h5>
                <span className="text-gold-500 text-xs tracking-wider uppercase md:font-medium">{reviews[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={next} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-dark-900 border border-gold-600/30 text-gold-500 hover:bg-gold-600 hover:text-dark-950 p-2 md:p-3 rounded-full transition-all z-20 shadow-xl flex items-center justify-center" aria-label="Siguiente">
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir a reseña ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-gold-500' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
