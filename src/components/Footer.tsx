import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-t from-primary-50 to-white border-t border-gray-200 mt-12">
    <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-3 mb-4 md:mb-0">
        <svg
          className="w-8 h-8 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M8 15c1.333-2 4.667-2 6 0" strokeWidth="2" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
        <span className="font-bold text-lg text-primary-700 tracking-tight">TherapyConnect</span>
      </div>
      <nav className="flex space-x-6 text-gray-600 text-sm mb-4 md:mb-0">
        <a href="/" className="hover:text-primary-600 transition-colors">
          Home
        </a>
        <a href="/about" className="hover:text-primary-600 transition-colors">
          About
        </a>
        <a href="/services" className="hover:text-primary-600 transition-colors">
          Services
        </a>
        <a href="/book" className="hover:text-primary-600 transition-colors">
          Book
        </a>
        <a href="/contact" className="hover:text-primary-600 transition-colors">
          Contact
        </a>
      </nav>
      <div className="text-gray-400 text-xs text-center md:text-right">
        &copy; {new Date().getFullYear()} TherapyConnect. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
