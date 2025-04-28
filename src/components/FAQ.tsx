import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often will the training sessions take place?",
      answer: "Training frequency depends on the requirements of the user organization. On average, trainers can expect about 4–5 days of training per month."
    },
    {
      question: "Who will be the target audience?",
      answer: "Please refer to the Training Registration Page to view the target audience for each domain."
    },
    {
      question: "Will the training be paid?",
      answer: "Yes, all trainings are paid. Trainers will receive compensation based on the session and duration."
    },
    {
      question: "Will accommodation be provided?",
      answer: "Accommodation support may be offered depending on the trainer's base location and the agreement with the user organization. This will be discussed on a case-by-case basis."
    },
    {
      question: "Is there any long-term contract for trainers?",
      answer: "No, there is no long-term contract. Trainings are organized on a demand basis, as per the needs of the user organizations, and are facilitated by Vitalstride."
    },
    {
      question: "What is the Trainer Rating Index?",
      answer: "The Trainer Rating Index is created based on feedback from the user organization and participants. This rating helps ensure quality and guides organizations in selecting the most effective trainers."
    },
    {
      question: "Will trainers be able to see their ratings?",
      answer: "Vitalstride and the user organization reserve the right to decide whether or not the rating will be shared with the trainer."
    },
    {
      question: "How will I be informed about upcoming training opportunities?",
      answer: "After submitting your initial details, you will receive an email from Vitalstride with a Trainer Registration Form. Once completed, your profile will be mapped to relevant domains. When a training requirement arises in your domain, Vitalstride will inform you directly. Note: The frequency of training offers may vary and will largely depend on your Trainer Rating Index."
    },
    {
      question: "Is there any fee for trainer registration?",
      answer: "No, trainer registration is currently free of cost."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">FAQ Section</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Click on each question to view the answer
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;