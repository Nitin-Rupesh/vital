import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDomainsOpen, setIsDomainsOpen] = useState(false);

  const domains = [
    {
      name: 'Public Health',
      audience: 'Govt. Doctor, Nurse, Lab Technician, Women Health Volunteer, Community',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Nutrition',
      audience: 'Anganwadi Worker, Anganwadi Helper, Pregnant and lactating women',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Agriculture',
      audience: 'Farmer, FPO, Agri Entrepreneur, SHGs',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Livelihood',
      audience: 'Youth, SHGs, SMEs',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'WASH',
      audience: 'Community, Sanitation workers',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Digital & Emerging Technologies',
      audience: 'Youth, SHGs, SMEs',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Climate Change',
      audience: 'Youth, Institutions',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Water Resource Management',
      audience: 'Community, Farmer, Water User Committees',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Financial Literacy',
      audience: 'SHGs, Women, Community',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Animal Husbandry',
      audience: 'Farmer, FPO, Agri Entrepreneur, SHGs',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    },
    {
      name: 'Aquaculture',
      audience: 'Fishing Community, Farmer',
      location: 'Pudur & Vilathikulam Blocks of Thoothukudi',
      type: 'Remote',
      language: 'Tamil'
    }
  ];

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
          src="/VitalStrideLogo03.png" // <-- Replace with your logo path
          alt="VitalStride Logo"
          className="h-10 w-auto"
        />
      </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#impact" className="text-gray-700 hover:text-indigo-600">Impact</a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-600">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            
            <div className="relative">
              <button
                onClick={() => setIsDomainsOpen(!isDomainsOpen)}
                className="flex items-center text-gray-700 hover:text-indigo-600"
              >
                Training Domains
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDomainsOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg py-2 z-50 max-h-[80vh] overflow-y-auto">
                  {domains.map((domain, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-50"
                    >
                      <h3 className="font-semibold text-gray-900">{domain.name}</h3>
                      <div className="mt-1 text-sm text-gray-600">
                        <p><span className="font-medium">Target Audience:</span> {domain.audience}</p>
                        <p><span className="font-medium">Location:</span> {domain.location}</p>
                        <p><span className="font-medium">Type:</span> {domain.type}</p>
                        <p><span className="font-medium">Language:</span> {domain.language}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

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
              <a href="#faq" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">FAQ</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
              
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsDomainsOpen(!isDomainsOpen)}
                  className="flex items-center text-gray-700 hover:text-indigo-600"
                >
                  Training Domains
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isDomainsOpen && (
                  <div className="mt-2 space-y-2">
                    {domains.map((domain, index) => (
                      <div
                        key={index}
                        className="px-2 py-3 bg-gray-50 rounded-lg"
                      >
                        <h3 className="font-semibold text-gray-900">{domain.name}</h3>
                        <div className="mt-1 text-sm text-gray-600">
                          <p><span className="font-medium">Target Audience:</span> {domain.audience}</p>
                          <p><span className="font-medium">Location:</span> {domain.location}</p>
                          <p><span className="font-medium">Type:</span> {domain.type}</p>
                          <p><span className="font-medium">Language:</span> {domain.language}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

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