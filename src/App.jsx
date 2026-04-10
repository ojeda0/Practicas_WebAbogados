import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import MapContact from './components/MapContact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 selection:bg-gold-600 selection:text-dark-950">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <MapContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
