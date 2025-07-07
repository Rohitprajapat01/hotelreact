import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    { url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg', title: 'Hotel Exterior', category: 'Garden' },
    { url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', title: 'Nearby Places', category: 'Temple' },
    { url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg', title: 'Nearby Places', category: 'Temple' },
    { url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg', title: 'Hotel Exterior', category: 'Exterior' },
    { url: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg', title: 'Deluxe Suite', category: 'Rooms' },
    { url: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg', title: 'Garden', category: 'Amenities' },
    { url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg', title: 'Nearby Attractions', category: 'Temple' },
    { url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg', title: 'Family Suite', category: 'Rooms' }
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Gallery</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our beautiful rest house and discover what makes us special
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl cursor-pointer aspect-square group"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                <p className="text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div className="relative max-w-5xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300 z-10"
              >
                <X size={24} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300 z-10"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors duration-300 z-10"
              >
                <ChevronRight size={24} />
              </button>

              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-1">{galleryImages[currentImageIndex].title}</h3>
                <p className="text-sm">{galleryImages[currentImageIndex].category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;