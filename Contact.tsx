import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for reservations, inquiries, or any assistance you need
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <a href="tel:+918112204391" className="text-blue-600 hover:text-blue-700 font-semibold">
                      +91-8112204391
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <a 
                      href="https://wa.me/918112204391" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      +91-8112204391
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <a 
                      href="mailto:sapthagiriresthouses@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      sapthagiriresthouses@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Information Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Hotel Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      Balaji Nagar, Tirumala, Tirupati <br />Andhra Pradesh 517504
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-blue-500 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Reception Hours</p>
                    <p className="text-gray-600">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Book?</h3>
            <p className="text-gray-600 mb-8">
              Contact us directly for immediate assistance with your reservation. Our friendly staff is available 24/7 to help you plan your perfect stay.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="https://wa.me/918112204391"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <MessageCircle size={20} />
                Book via WhatsApp
              </a>
              <a
                href="tel:+918112204391"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="mailto:sapthagiriresthouses@gmail.com"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Mail size={20} />
                Send Email
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h4 className="font-semibold text-gray-800 mb-4">Why Choose Us?</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• 24/7 customer support</li>
                <li>• Instant booking confirmation</li>
                <li>• Best price guarantee</li>
                <li>• Free cancellation up to 24 hours</li>
                <li>• Personalized service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;