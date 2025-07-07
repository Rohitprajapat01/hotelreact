import React, { useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <div className={`flex flex-col gap-4 mb-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
      }`}>
        <a
          href="https://wa.me/918112204391"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
        <a
          href="tel:+918112204391"
          className="flex items-center gap-3 px-5 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
        >
          <Phone size={20} />
          Call Now
        </a>
      </div>

      <button
        onClick={toggleOptions}
        className={`w-15 h-15 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default FloatingContact;