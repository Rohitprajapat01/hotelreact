import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <h3 className="text-xl font-bold">Sapthagiri Rest House</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience luxury and comfort in the heart of the city. Your perfect getaway awaits at Sapthagiri Rest House.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Rooms', 'Gallery', 'Location', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+918112204391" className="text-gray-300 hover:text-white transition-colors duration-300">
                  +91 8112204391
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a 
                  href="https://wa.me/918112204391" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a 
                  href="mailto:sapthagiriresthouses@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  sapthagiriresthouses@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span className="text-gray-300">
                  Balaji Nagar, Tirumala, Tirupati<br />Andhra Pradesh 517504
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="text-gray-300 space-y-2">
              <li>• 24/7 Room Service</li>
              <li>• Free WiFi</li>
              <li>• Valet Parking</li>
              <li>• Concierge Service</li>
              <li>• Business Center</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">© 2025 Sapthagiri Rest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;