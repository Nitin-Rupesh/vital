import React from 'react';

const FAQ = () => {
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

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common questions about our training program.
          </p>
        </div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;