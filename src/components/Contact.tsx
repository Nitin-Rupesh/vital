import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';

const Contact = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleDomainChange = (e) => {
    const domain = domains.find(d => d.name === e.target.value);
    setSelectedDomain(domain || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const formData = new FormData(e.target);
    await fetch('https://formsubmit.co/info@vitalstride.in', {
      method: 'POST',
      body: formData
    });

    // Refresh the page after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Build Capacity Together!</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-4">
            We're here to support your training journey—whether you're looking to hire or deliver.
          </p>
          <p className="text-gray-600">* Required fields</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-sm"
          >
            {/* FormSubmit.co Configuration */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="age"
                    required
                    min="18"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <span className="text-gray-600">years</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Educational Qualification <span className="text-red-500">*</span>
                </label>
                <select
                  name="education"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select your highest qualification</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelor's Degree (BA/BSc/BCom/B.Tech/BE/MBBS/BDS)</option>
                  <option value="masters">Master's Degree (MA/MSc/MCom/M.Tech/ME/MBA/MPH)</option>
                  <option value="doctorate">Doctorate (PhD)</option>
                  <option value="professional">Professional Certification (PG Diploma/MSW)</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Professional Details */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Professional Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Domain <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="domain"
                    required
                    onChange={handleDomainChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="">Select domain</option>
                    {domains.map((domain, index) => (
                      <option key={index} value={domain.name}>
                        {domain.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedDomain && (
                  <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Target Audience
                      </label>
                      <input
                        type="text"
                        name="target_audience"
                        value={selectedDomain.audience}
                        readOnly
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Training Location
                      </label>
                      <input
                        type="text"
                        name="training_location"
                        value={selectedDomain.location}
                        readOnly
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location Type
                      </label>
                      <input
                        type="text"
                        name="location_type"
                        value={selectedDomain.type}
                        readOnly
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Training Language
                      </label>
                      <input
                        type="text"
                        name="training_language"
                        value={selectedDomain.language}
                        readOnly
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-500"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Domain Experience <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      name="experience"
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    <span className="text-gray-600">years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-sm text-gray-500">Please enter a valid email address</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <p className="mt-1 text-sm text-gray-500">Enter 10-digit number without country code</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Share any relevant information or specific inquiries"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className={`w-full flex items-center justify-center px-6 py-3 rounded-lg transition duration-300 ${
                isSubmitted 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white`}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Submitted
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">info@vitalstride.in</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-indigo-600 mr-3" />
              <div>
                <h4 className="font-medium">Address</h4>
                <p className="text-gray-600">VitalStride, Varthur, Bangalore, KA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;