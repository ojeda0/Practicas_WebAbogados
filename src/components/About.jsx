import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const principles = [
    "Transparencia total en honorarios y viabilidad del caso",
    "Trato humano y cercano en momentos difíciles",
    "Rigor jurídico y actualización legislativa constante",
    "Estrategia personalizada para cada cliente"
  ];

  return (
    <section id="quienes-somos" className="section-padding bg-dark-900 border-t border-dark-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-500 uppercase tracking-wide mb-3">Quiénes Somos</h2>
          <h3 className="text-xl md:text-2xl font-medium text-gray-200 mb-6">
            Compromiso absoluto impartiendo justicia real
          </h3>
          <div className="h-1 w-20 bg-gold-600 mb-8 rounded-full"></div>
          
          <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
            <p>
              En <span className="text-gold-500 font-medium tracking-wide">Ortiz Abogado</span>, entendemos que detrás de cada expediente hay una historia, una preocupación y un proyecto de vida. Nuestro despacho nació en Sevilla con la vocación de ofrecer un asesoramiento legal de primer nivel accesible a todos.
            </p>
            <p>
              Nos distinguimos por nuestra combatividad en los tribunales y nuestra capacidad de mediación y negociación cuando es la vía más beneficiosa para nuestros clientes.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-200">{principle}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image/Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gold-600/20 translate-x-4 translate-y-4 rounded-xl"></div>
          <div className="relative bg-dark-800 rounded-xl overflow-hidden border border-dark-700 shadow-2xl h-[500px]">
            {/* Imagen Fotorealista Generada de la oficina */}
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-950/80 via-transparent to-dark-900/50 z-10 pointer-events-none"></div>
            <img src="/about_office.png" alt="Despacho Ortiz Abogado" className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-700" />
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-dark-950/90 backdrop-blur-sm p-6 rounded-xl border border-dark-800">
              <p className="font-serif text-lg text-gold-500 italic mb-2">
                "El derecho se transforma constantemente. Si no sigues sus pasos, serás cada día un poco menos abogado."
              </p>
              <span className="text-gray-500 text-xs uppercase tracking-wider">— Eduardo J. Couture</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
