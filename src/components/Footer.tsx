import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VitalStride</h3>
            <p className="text-gray-400">Empowering Development, One Training at a Time</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-white">Impact Areas</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Impact Areas</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Public Health</li>
              <li className="text-gray-400">Nutrition</li>
              <li className="text-gray-400">Livelihood</li>
              <li className="text-gray-400">WASH</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <p className="text-gray-400 mb-2">info@vitalstride.in</p>
            <p className="text-gray-400">VitalStride, Varthur, Bangalore, KA</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VitalStride. All rights reserved.  Powered by Digisailor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;