import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

const ThankYou = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-md w-full mx-4 p-8 bg-white rounded-xl shadow-lg animate-fade-in">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your application has been successfully submitted. We'll review your details and get back to you soon.
          </p>

          <div className="text-sm text-gray-500 mb-6">
            Redirecting to home in <span className="font-semibold">{countdown}</span> seconds...
          </div>

          <noscript>
            <p className="text-sm text-gray-500 mb-6">
              Please click the button below to return to the home page.
            </p>
          </noscript>

          <a
            href="/"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-indigo-600 bg-transparent border border-indigo-600 rounded-full hover:bg-indigo-50 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;