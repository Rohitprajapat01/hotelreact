import React from 'react';
import { Users, Bed, Bath, Phone, MessageCircle } from 'lucide-react';

interface Room {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  guests: number;
  beds: string;
  bath: string;
  amenities: string[];
}

const Rooms: React.FC = () => {
  const rooms: Room[] = [
    {
      id: '1',
      name: 'Non-AC Suite',
      price: '₹ 1700/night',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      description: 'An elegant suite with refined decor and premium services for the discerning traveler.',
      guests: 2,
      beds: '1 Double Bed',
      bath: 'En-suite Bath',
      amenities: ['WiFi', 'Room Service', 'Work Desk', 'Parking Services']
    },
    {
      id: '2',
      name: 'VIP Suite',
      price: '₹ 4000/night',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      description: 'Luxurious suite with modern amenities and stunning city views.',
      guests: 2,
      beds: 'King Bed',
      bath: 'Private Bath',
      amenities: ['WiFi', 'AC', 'Room Service', 'Balcony', 'City View', 'Valet Parking', 'VIP Features', 'Premium Services']
    },
    {
      id: '3',
      name: '2 Suite Room',
      price: '₹ 2500/night',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
      description: 'Comfortable and affordable room with all essential amenities.',
      guests: 4,
      beds: '2 Double Beds',
      bath: 'Private Bath',
      amenities: ['WiFi', 'AC', 'Kitchen', 'Living Area', 'Balcony', 'Garden View']
    },
    {
      id: '4',
      name: '3 Suite Room',
      price: '₹ 3000/night',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      description: 'Spacious family room perfect for a comfortable stay with loved ones.',
      guests: 6,
      beds: '3 Double Bed',
      bath: 'Luxury Bath',
      amenities: ['WiFi', 'AC', 'Butler Service', 'Terrace', 'Valet Parking']
    },
    {
      id: '5',
      name: '1 Suite Room',
      price: '₹ 2000/night',
      image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
      description: 'Comfortable and affordable room with all essential amenities.',
      guests: 2,
      beds: '1 Double Bed',
      bath: 'Private Bath',
      amenities: ['WiFi', 'AC', 'Desk', 'Safe', 'Garden View']
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Our Rooms</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully designed rooms, each offering unique comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold">
                  {room.price}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{room.name}</h3>
                <p className="text-gray-600 mb-6">{room.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm">{room.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bed size={16} />
                    <span className="text-sm">{room.beds}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 sm:col-span-2">
                    <Bath size={16} />
                    <span className="text-sm">{room.bath}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-gray-800">Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://wa.me/918112204391"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+918112204391"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300"
                  >
                    <Phone size={16} />
                    Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;