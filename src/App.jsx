import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Briefcase, Globe } from 'lucide-react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Footer from './components/Footer';

const laboralSubservices = [
  {
    id: 'despido-sin-permiso-de-trabajo',
    title: 'Despido sin permiso de trabajo',
    description: 'Asesoramiento y defensa legal frente a despidos sin permiso de trabajo.',
    icon: <Briefcase size={32} />,
    image: '/svc_laboral.png',
  }
];

const extranjeriaSubservices = [
  {
    id: 'despido-sin-permiso-de-trabajo',
    title: 'Despido sin permiso de trabajo',
    description: 'Asesoramiento y defensa legal frente a despidos sin permiso de trabajo.',
    icon: <Globe size={32} />,
    image: '/svc_extranjeria.png',
  },
  {
    id: 'regularizacion-extraordinaria',
    title: 'Regularización extraordinaria',
    description: 'Trámites para obtener la residencia y regularizar tu situación en España.',
    icon: <Globe size={32} />,
    image: '/svc_extranjeria.png',
  },
  {
    id: 'arraigos',
    title: 'Arraigos',
    description: 'Gestión de arraigo sociolaboral, socioformativo, social y segunda oportunidad.',
    icon: <Globe size={32} />,
    image: '/svc_extranjeria.png',
  }
];

const ortizSpan = <span className="text-gold-500 font-medium tracking-wide">Ortiz Abogado</span>;

const descLaboral = (
  <>En {ortizSpan}, entendemos que el entorno laboral es fundamental para su estabilidad profesional y vital. Ofrecemos un asesoramiento jurídico integral, defendiendo con absoluta firmeza los derechos de los trabajadores frente a despidos injustificados, reclamaciones de cantidad y cualquier vulneración en su puesto de trabajo.</>
);
const descExtranjeria = (
  <>En {ortizSpan}, nos encargamos de gestionar su estatus legal en España, garantizando que cada trámite de arraigo, residencia o nacionalidad se ejecute con el máximo rigor para asegurar su tranquilidad y la de su familia.</>
);
const descCivil = (
  <>En {ortizSpan}, sabemos que los conflictos en el ámbito civil y familiar requieren tacto humano y eficacia jurídica. Abordamos divorcios, redacción de contratos, herencias y custodias con un enfoque conciliador cuando es posible, y con la máxima asertividad legal en los tribunales cuando es necesario para proteger su patrimonio y bienestar.</>
);
const descPenal = (
  <>En {ortizSpan}, creemos que ante la gravedad de un procedimiento penal, contar con una defensa férrea y proactiva es su mayor garantía. Intervenimos desde el primer instante en asistencia a detenidos, juicios rápidos y procedimientos complejos, velando incansablemente por el respeto de sus garantías procesales y su presunción de inocencia.</>
);

const descDespidoSinPermiso = (
  <div className="space-y-6 text-left">
    <p>
      En {ortizSpan}, sabemos que el hecho de no disponer de autorización administrativa para trabajar en España <strong className="text-white font-medium">no impide reclamar frente a un despido</strong>. La legislación laboral protege igualmente los derechos básicos de la persona trabajadora, con independencia de su situación administrativa.
    </p>
    <p>
      En nuestro despacho tramitamos de forma habitual procedimientos de despido en estos supuestos, reclamando las cantidades que correspondan por salarios pendientes, finiquito e indemnización, así como la posible improcedencia del despido cuando no se ajusta a Derecho.
    </p>
    <p>
      Se trata de un procedimiento <strong className="text-white font-medium">más accesible de lo que habitualmente se piensa</strong>, y en muchos casos puede iniciarse de forma ágil con la documentación mínima (mensajes, transferencias, testigos, etc.), siendo posible acreditar la relación laboral por distintos medios de prueba.
    </p>
    <p>
      Nuestro equipo analiza cada caso de manera individualizada para diseñar la estrategia más eficaz, facilitando al máximo el proceso al cliente y reduciendo las barreras que puedan existir por su situación administrativa.
    </p>
    <p>
      Defendemos tus derechos con independencia de tu situación, porque <strong className="text-white font-medium">haber trabajado genera derechos, siempre</strong>.
    </p>
  </div>
);

const descRegularizacionExtraordinaria = (
  <div className="space-y-6 text-left">
    <p>
      En {ortizSpan}, sabemos que la regularización extraordinaria es una oportunidad real y, en muchos casos, <strong className="text-white font-medium">más sencilla de lo que parece</strong> para obtener autorización de residencia y trabajo en España.
    </p>
    <p>
      Solo necesitas pasaporte, certificado de antecedentes penales de tu país de origen y prueba de permanencia en España por los últimos cinco meses.
    </p>
    <p>
      Si llevas tiempo en el país o puedes acreditar determinadas circunstancias personales o laborales, <strong className="text-white font-medium">es posible iniciar el procedimiento con relativa facilidad</strong>, sin necesidad de contar con una situación administrativa previa regularizada.
    </p>
    <p>
      En nuestro despacho analizamos tu caso de forma rápida y directa, identificando la vía más viable y encargándonos de todo el proceso: preparación de documentación, presentación de la solicitud y seguimiento del expediente.
    </p>
    <p>
      Nuestro objetivo es claro: <strong className="text-white font-medium">facilitarte al máximo el camino para conseguir tus papeles</strong>, eliminando obstáculos y explicándote cada paso de forma sencilla y comprensible.
    </p>
    <p>
      Cada situación es diferente, pero en muchos casos existen soluciones legales efectivas que permiten regularizar tu situación antes de lo que imaginas.
    </p>
  </div>
);

const descArraigos = (
  <div className="space-y-6 text-left">
    <p>
      En {ortizSpan}, tratamos las distintas modalidades de arraigo, que constituyen actualmente <strong className="text-white font-medium">una de las vías más accesibles y eficaces para regularizar la situación administrativa en España.</strong>
    </p>
    <p>
      En muchos casos, <strong className="text-white font-medium">no es necesario cumplir requisitos complejos</strong>, sino simplemente acreditar determinadas circunstancias como el tiempo de permanencia en el país, la existencia de una oferta de trabajo, la realización de formación o la integración social.
    </p>
    <div>
      <p className="mb-3">Trabajamos con todas las modalidades de arraigo:</p>
      <div className="space-y-2 pl-4">
        <p>- <strong className="text-white font-medium">Arraigo sociolaboral:</strong> dirigido a quienes pueden acreditar una relación laboral o una oferta de empleo.</p>
        <p>- <strong className="text-white font-medium">Arraigo socioformativo:</strong> permite regularizarse a través de la realización de formación reglada o profesional.</p>
        <p>- <strong className="text-white font-medium">Arraigo social:</strong> una de las vías más habituales, basada en el tiempo de permanencia en España y el grado de integración.</p>
        <p>- <strong className="text-white font-medium">Arraigo de segunda oportunidad:</strong> pensado para personas que han tenido autorización previa y pueden volver a regularizar su situación.</p>
      </div>
    </div>
    <p>
      En nuestro despacho analizamos tu caso de forma inmediata para identificar la opción más rápida y viable, encargándonos de todo el procedimiento y simplificando al máximo los trámites.
    </p>
    <p>
      Nuestro enfoque es claro: <strong className="text-white font-medium">hacer que el proceso sea lo más sencillo posible para ti</strong>, acompañándote en cada paso y aumentando al máximo tus posibilidades de éxito.
    </p>
    <p>
      Regularizar tu situación <strong className="text-white font-medium">puede estar mucho más cerca de lo que imaginas.</strong>
    </p>
  </div>
);

const descPrivacidad = (
  <div className="space-y-8 text-left text-gray-300">
    <p className="text-sm text-gray-500 mb-6">Última actualización: 27 de abril de 2026</p>
    
    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">1. Introducción</h3>
      <p>
        En <span className="text-gold-500 font-medium">Ortiz Abogado</span>, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad describe cómo recopilamos, usamos y compartimos tu información cuando visitas nuestro sitio web o contratas nuestros servicios jurídicos.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">2. Datos que recopilamos</h3>
      <p>Podemos recopilar diferentes tipos de información, incluyendo:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Información de contacto (nombre, correo electrónico, número de teléfono).</li>
        <li>Información documental y personal relativa a tu caso o consulta jurídica.</li>
        <li>Datos de uso y navegación en nuestro sitio web.</li>
        <li>Comunicaciones y consultas que mantenemos contigo.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">3. Cómo utilizamos tu información</h3>
      <p>Utilizamos tu información para:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Prestar y gestionar nuestros servicios de asesoramiento y representación legal.</li>
        <li>Comunicarnos contigo sobre tu expediente o procedimiento.</li>
        <li>Mejorar nuestros servicios y experiencia de usuario.</li>
        <li>Cumplir con nuestras estrictas obligaciones legales y deontológicas de cara a los juzgados.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">4. Confidencialidad y compartición</h3>
      <p>
        Como despacho de abogados, nos rige el <strong>secreto profesional</strong>. No vendemos tu información personal bajo ningún concepto. Únicamente compartimos datos con:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Juzgados, tribunales y administraciones públicas cuando sea estrictamente necesario para tu defensa.</li>
        <li>Procuradores, peritos o profesionales vinculados a tu caso con tu consentimiento.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">5. Tus derechos</h3>
      <p>Según la legislación aplicable, tienes derecho a:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Acceder a tus datos personales</li>
        <li>Rectificar información inexacta</li>
        <li>Solicitar la eliminación de tus datos</li>
        <li>Oponerte al procesamiento de tus datos</li>
        <li>Solicitar la portabilidad de tus datos</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">6. Cookies y tecnologías similares</h3>
      <p>
        Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">7. Contacto</h3>
      <p>
        Si tienes preguntas sobre esta política de privacidad o sobre cómo tratamos tus datos, puedes contactarnos en:
      </p>
      <ul className="list-none space-y-2 text-gray-400">
        <li className="flex items-center gap-2">📧 <a href="mailto:manuelortsanz@gmail.com" className="text-gold-500 hover:text-gold-400 transition-colors">manuelortsanz@gmail.com</a></li>
        <li className="flex items-center gap-2">📞 <a href="tel:+34661528937" className="text-gold-500 hover:text-gold-400 transition-colors">+34 661 52 89 37</a></li>
      </ul>
      <p>
        También puedes contactarnos en el botón de aquí abajo.
      </p>
    </section>
  </div>
);

const descTerminos = (
  <div className="space-y-8 text-left text-gray-300">
    <p className="text-sm text-gray-500 mb-6">Última actualización: 27 de abril de 2026</p>
    
    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">1. Aceptación de los términos</h3>
      <p>
        Al acceder y utilizar los servicios de <span className="text-gold-500 font-medium">Ortiz Abogado</span>, aceptas estar legalmente vinculado por estos términos de servicio. Si no estás de acuerdo con alguno de estos términos, te invitamos a no utilizar la funcionalidad de este portal.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">2. Descripción del servicio</h3>
      <p>
        Ortiz Abogado proporciona servicios de asesoramiento jurídico, mediación y representación procesal en diversas ramas del derecho (laboral, civil, penal y extranjería), de manera profesional, según las especificaciones acordadas con el cliente.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">3. Derechos y limitaciones</h3>
      <p>No está permitido en nuestro sitio web ni en la provisión del servicio:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        <li>Utilizar nuestros servicios de contacto para actividades fraudulentas o ilegales.</li>
        <li>Proporcionar información o documentación falsa a la hora de contratar nuestros servicios.</li>
        <li>Intentar acceder a áreas restringidas o dañar la integridad de nuestros sistemas informáticos.</li>
      </ul>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">4. Honorarios profesionales</h3>
      <p>
        Los honorarios derivados de nuestros servicios jurídicos serán tasados, presupuestados y acordados previamente con el cliente de acuerdo a las pautas deontológicas vigentes. Los pagos se realizarán según las condiciones pactadas y estipuladas de manera transparente.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">5. Modificaciones de los términos</h3>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">6. Ley aplicable</h3>
      <p>
        Estos términos se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
      </p>
    </section>

    <section className="space-y-3">
      <h3 className="text-2xl font-sans font-bold text-white">7. Contacto</h3>
      <p>
        Si tienes preguntas sobre estos términos de servicio, puedes contactarnos en:
      </p>
      <ul className="list-none space-y-2 text-gray-400">
        <li className="flex items-center gap-2">📧 <a href="mailto:manuelortsanz@gmail.com" className="text-gold-500 hover:text-gold-400 transition-colors">manuelortsanz@gmail.com</a></li>
        <li className="flex items-center gap-2">📞 <a href="tel:+34661528937" className="text-gold-500 hover:text-gold-400 transition-colors">+34 661 52 89 37</a></li>
      </ul>
      <p>
        También puedes contactarnos en el botón de aquí abajo.
      </p>
    </section>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-gray-100 selection:bg-gold-600 selection:text-dark-950">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Navigate to="/#servicios" replace />} />
            
            {/* Rutas principales de servicios */}
            <Route path="/servicios/derecho-laboral" element={<ServicePage title="Derecho Laboral" description={descLaboral} subServices={laboralSubservices} basePath="/servicios/derecho-laboral" headerImage="/bg_laboral.png" />} />
            <Route path="/servicios/extranjeria" element={<ServicePage title="Extranjería e Inmigración" description={descExtranjeria} subServices={extranjeriaSubservices} basePath="/servicios/extranjeria" headerImage="/bg_extranjeria.png" />} />
            <Route path="/servicios/derecho-civil" element={<ServicePage title="Derecho Civil y Familia" description={descCivil} headerImage="/bg_civil.png" />} />
            <Route path="/servicios/derecho-penal" element={<ServicePage title="Derecho Penal" description={descPenal} headerImage="/bg_penal.png" />} />

            {/* Sub-rutas (Páginas individuales) */}
            <Route path="/servicios/derecho-laboral/despido-sin-permiso-de-trabajo" element={<ServicePage title="Despido sin permiso de trabajo" description={descDespidoSinPermiso} headerImage="/bg_despido.png" />} />
            <Route path="/servicios/extranjeria/despido-sin-permiso-de-trabajo" element={<ServicePage title="Despido sin permiso de trabajo" description={descDespidoSinPermiso} headerImage="/bg_despido.png" />} />
            <Route path="/servicios/extranjeria/regularizacion-extraordinaria" element={<ServicePage title="Regularización extraordinaria" description={descRegularizacionExtraordinaria} headerImage="/bg_regularizacion.png" />} />
            <Route path="/servicios/extranjeria/arraigos" element={<ServicePage title="Arraigos: sociolaboral, socioformativo, social y segunda oportunidad" description={descArraigos} headerImage="/bg_arraigos.png" />} />

            {/* Páginas Legales */}
            <Route path="/privacidad" element={<ServicePage title="Política de Privacidad" description={descPrivacidad} headerImage="/bg_legal.png" showBackBtn={true} />} />
            <Route path="/terminos" element={<ServicePage title="Términos de Servicio" description={descTerminos} headerImage="/bg_legal.png" showBackBtn={true} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
