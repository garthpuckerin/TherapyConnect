import React from 'react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Begin Your Healing Journey?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Take the first step towards better mental health. Book your initial consultation today and
          start working towards a healthier, happier you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/book"
            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Book Your Session
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
