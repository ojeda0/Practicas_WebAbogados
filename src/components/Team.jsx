import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Manuel Ortiz",
      role: "Socio Fundador - Especialista Laboral",
      description: "Especialista en derecho laboral. Defensor incansable de los derechos del trabajador.",
      imagen: "M" // Inicial como placeholder
    },
    // Se pueden añadir más miembros del equipo aquí
  ];

  return (
    <section id="equipo" className="section-padding bg-dark-950 relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-500 uppercase tracking-wide mb-3">Los Profesionales</h2>
        <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">Un equipo legal consolidado</h3>
        <div className="h-1 w-20 bg-gold-600 mx-auto rounded-full"></div>
      </div>

      <div className="flex justify-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group max-w-sm w-full"
          >
            <div className="bg-dark-900 border border-dark-800 rounded-xl overflow-hidden hover:border-gold-600/40 transition-colors shadow-2xl relative">
              {/* Photo area */}
              <div className="h-72 bg-gradient-to-t from-dark-900 to-dark-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>
                <img src="/manuel.png" alt={member.name} className="absolute inset-0 w-full h-full object-cover object-center mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 z-10" />
              </div>
              
              {/* Info area */}
              <div className="p-8 text-center relative bg-dark-900">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gold-600"></div>
                <h4 className="text-2xl font-serif text-white mb-2">{member.name}</h4>
                <h5 className="text-gold-500 text-sm font-medium uppercase tracking-wider mb-4">{member.role}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Team;
