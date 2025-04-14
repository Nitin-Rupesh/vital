import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between h-16">
    //       <div className="flex items-center">
    //         <span className="text-2xl font-bold text-indigo-600">VitalStride</span>
    //       </div>
          
          <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
      <div className="flex items-center">
        <img
          src="C:\Users\Dell\Downloads\project-bolt-sb1-fmhazkca\project\src\VitalStride Logo-03.png" // <-- Replace with your logo path
          alt="VitalStride Logo"
          className="h-10 w-auto"
        />
      </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#impact" className="text-gray-700 hover:text-indigo-600">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <a 
              href="#contact" 
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
            >
              Join as Trainer
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Impact</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
              <a 
                href="#contact" 
                className="block w-full mt-4 text-center bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Join as Trainer
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;