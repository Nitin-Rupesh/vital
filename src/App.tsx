import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowRight, Award, Heart, LineChart, Shield, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/thank-you" element={<ThankYou />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <main>
                <Hero />
                <About />
                <Services />
                <Impact />
                <Testimonials />
                <FAQ />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;