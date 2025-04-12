import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-indigo-600" />,
      title: 'Community Empowerment',
      description: 'Fostering sustainable growth through community-driven initiatives.'
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Transparency',
      description: 'Building trust through open communication and clear processes.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Gender Inclusivity',
      description: 'Promoting equal opportunities and diverse perspectives.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Founded in 2023, VitalStride is a women-led enterprise committed to strengthening social impact through meaningful training across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;