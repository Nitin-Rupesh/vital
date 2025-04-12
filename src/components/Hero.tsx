import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Development,
            <br />
            <span className="text-indigo-600">One Training at a Time</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            VitalStride is your trusted partner in delivering impactful training solutions for the CSR, NGO, and development sectors. We bridge the gap between organizations and expert trainers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-indigo-600 text-base font-medium rounded-full text-indigo-600 bg-white hover:bg-indigo-50 transition"
            >
              Join as a Trainer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;