import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    { src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg', alt: 'Luxury Hotel Interior' },
    { src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', alt: 'Hotel Exterior with Temple View' },
    { src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', alt: 'Comfortable Room' },
    { src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', alt: 'Deluxe Suite' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl px-4 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up" style={{ WebkitTextStroke: '0.6px rgb(185, 184, 166)' }}>
          Welcome to <br />Sapthagiri Rest House
        </h1>
        <p className="text-base md:text-lg mb-4 font-bold animate-fade-in-up delay-100" style={{ color: 'rgb(255, 255, 255)', WebkitTextStroke: '0.5px rgb(255, 0, 0)' }}>
          TIRUMALA TIRUPATI DEVASTHANAMS
        </p>
        <p className="text-base md:text-lg mb-4 animate-fade-in-up delay-200">
          Experience luxury and comfort in the heart of the city
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-300">
          Discover our premium accommodations, world-class amenities, and exceptional service that creates unforgettable memories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
          <button
            onClick={() => scrollToSection('rooms')}
            className="px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
          >
            Explore Rooms
          </button>
          <a
            href="https://wa.me/918112204391"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('rooms')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce z-20"
      >
        <ChevronDown size={32} className="text-white" />
      </button>
    </section>
  );
};

export default Hero;