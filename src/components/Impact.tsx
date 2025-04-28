import React from 'react';
import { Heart, Droplets, Sun, Sprout, Users, Brain, Laptop, Coins, Fish, Cog as Cow } from 'lucide-react';

const Impact = () => {
  const areas = [
    { icon: <Heart className="h-6 w-6" />, title: 'Public Health' },
    { icon: <Sprout className="h-6 w-6" />, title: 'Nutrition' },
    { icon: <Users className="h-6 w-6" />, title: 'Agriculture' },
    { icon: <Brain className="h-6 w-6" />, title: 'Livelihood' },
    { icon: <Droplets className="h-6 w-6" />, title: 'WASH' },
    { icon: <Laptop className="h-6 w-6" />, title: 'Digital & Emerging Technologies' },
    { icon: <Sun className="h-6 w-6" />, title: 'Climate Change' },
    { icon: <Droplets className="h-6 w-6" />, title: 'Water Resource Management' },
    { icon: <Coins className="h-6 w-6" />, title: 'Financial Literacy' },
    { icon: <Cow className="h-6 w-6" />, title: 'Animal Husbandry' },
    { icon: <Fish className="h-6 w-6" />, title: 'Aquaculture' }
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact Areas</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We actively contribute to improving capabilities across vital development sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                {area.icon}
              </div>
              <h3 className="font-medium text-gray-900">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;