import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, Home, ArrowRight, Gavel, Scale } from 'lucide-react';

const services = [
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    description: 'Nuestra especialidad principal. Defendemos los derechos de trabajadores y empresas. Despidos, reclamaciones de cantidad, acoso laboral y accidentes de trabajo.',
    icon: <Briefcase size={32} />,
    image: '/svc_laboral.png',
    featured: true,
  },
  {
    id: 'extranjeria',
    title: 'Extranjería e Inmigración',
    description: 'Tramitación de residencias, nacionalidad española, arraigo, visados y recursos ante denegaciones. Tu regularización en las mejores manos.',
    icon: <Globe size={32} />,
    image: '/svc_extranjeria.png',
    featured: false,
  },
  {
    id: 'civil',
    title: 'Derecho Civil y Familia',
    description: 'Divorcios, custodias, herencias, pensiones alimenticias, redacción de contratos e incapacitaciones. Resoluciones justas para tu vida personal.',
    icon: <Home size={32} />,
    image: '/svc_civil.png',
    featured: false,
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    description: 'Asistencia al detenido, juicios rápidos, alcoholemias, delitos económicos y defensa o acusación en todo tipo de procedimientos penales.',
    icon: <Gavel size={32} />,
    image: '/svc_penal.png',
    featured: false,
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-dark-950 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full blur-[80px]"></div>
      
      <div className="text-center md:text-left mb-16 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-500 uppercase tracking-wide mb-3">Nuestros Servicios y Especialidades</h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">Expertos en proteger tu futuro y patrimonio</h3>
        <div className="h-1 w-20 bg-gold-600 md:ml-0 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Featured Service - Derecho Laboral */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 relative group rounded-2xl overflow-hidden border border-gold-600/30 bg-dark-900 shadow-2xl"
        >
          {/* Photorealistic Background for featured */}
          <div className="absolute inset-0 z-0">
            <img src={services[0].image} alt={services[0].title} className="w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/95 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-10 md:p-14 h-full flex flex-col justify-center">
            <div className="bg-gold-600 w-16 h-16 rounded-2xl flex items-center justify-center text-dark-950 mb-8 shadow-lg shadow-gold-600/20">
              {services[0].icon}
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold-400 text-xs font-bold uppercase tracking-widest bg-gold-900/40 px-3 py-1 rounded-full border border-gold-600/20">
                Especialidad Destacada
              </span>
            </div>
            <h4 className="text-3xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">
              {services[0].title}
            </h4>
            <p className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed">
              {services[0].description}
            </p>
            <a href="#contacto" className="inline-flex items-center gap-2 text-gold-500 font-medium hover:text-gold-400 transition-colors w-max">
              Consultar caso laboral <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* Regular Services */}
        {services.slice(1).map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card group hover:-translate-y-2 bg-dark-900 z-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
               <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-10 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity" />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-transparent"></div>
            </div>
            
            <div className="relative z-10 h-full flex flex-col pt-2">
              <div className="absolute -top-10 left-0 w-full h-1 bg-transparent group-hover:bg-gold-600 transition-colors"></div>
              <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 mb-6 text-sm flex-grow">
                {service.description}
              </p>
              <a href="#contacto" className="inline-flex items-center gap-2 text-sm text-gold-600 font-medium hover:text-gold-400 transition-colors mt-auto">
                Más información <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
