import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import MapContact from '../components/MapContact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Pequeño retraso para asegurar que ha renderizado
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <title>Ortiz Abogado | Despacho Jurídico en Sevilla</title>
      <meta name="description" content="Despacho multidisciplinar en Sevilla. Especialistas en Derecho Laboral, Extranjería, Civil y Penal. Primera consulta gratuita. Defendemos tus derechos." />
      <link rel="canonical" href="https://ortizabogado.es/" />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <MapContact />
    </>
  );
};

export default Home;
