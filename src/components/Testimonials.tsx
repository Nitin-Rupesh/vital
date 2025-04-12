import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "VitalStride has transformed our approach to training. Their ability to link us with domain-specific, quality trainers has significantly improved our program outcomes.",
      author: "Sarah Johnson",
      role: "Program Director, Health Initiative NGO"
    },
    {
      quote: "The trainer feedback mechanism helped us make informed decisions and fine-tune our training calendar for better results.",
      author: "Rajesh Kumar",
      role: "CSR Head, Tech Solutions Inc."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <blockquote className="text-lg text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
              <div>
                <cite className="block font-semibold text-gray-900 not-italic">{testimonial.author}</cite>
                <span className="text-gray-600">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;