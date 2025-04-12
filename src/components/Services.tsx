import React from 'react';
import { Database, Users, LineChart, BookOpen } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Trainer Database Creation',
      description: 'A rich, curated directory of expert trainers across multiple domains.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Custom Training Solutions',
      description: 'Matching trainers with organizations based on specific needs and objectives.'
    },
    {
      icon: <LineChart className="h-8 w-8 text-indigo-600" />,
      title: 'Trainer Rating Index',
      description: 'Unique feedback system for continuous improvement and quality assurance.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: 'Capacity Building Programs',
      description: 'Targeted programs for various stakeholders in the development sector.'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive training solutions designed for the development sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;