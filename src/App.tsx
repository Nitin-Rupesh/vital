import React from 'react';
import { ArrowRight, Award, Heart, LineChart, Shield, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Impact />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;