
import React from 'react';

const CTASection = () => {
  return (
    <div className="py-16 px-8 bg-gradient-to-r from-blue-900 to-blue-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-blue-400">êtes vous</span> prêt à faire une réservation ?
      </h2>
      <p className="max-w-2xl mx-auto mb-8">
        Join thousands of successful instructors on LearnPro and turn your passion into profit.
        We provide the tools and support you need to create engaging courses in any subject,
        from marketing to design and programming
      </p>
      <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition duration-300">
        Faire une première réservation
      </button>
    </div>
  );
};

export default CTASection;
