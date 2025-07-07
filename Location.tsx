import React from 'react';
import { MapPin, Clock, Car, Train, ParkingCircle, ExternalLink } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Our Location</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Perfectly positioned in the heart of the city with easy access to major attractions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-blue-500" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Address</h3>
                  <p className="text-gray-600">Balaji Nagar, Tirumala, Tirupati Andhra Pradesh 517504</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-500" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Check-in</p>
                    <p className="text-gray-600">8:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-500" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Check-out</p>
                    <p className="text-gray-600">11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Transportation</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Car className="text-blue-500" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Cab</p>
                    <p className="text-gray-600">20 minutes by car</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Train className="text-blue-500" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Train Station</p>
                    <p className="text-gray-600">15 minutes by car</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ParkingCircle className="text-blue-500" size={20} />
                  <div>
                    <p className="font-semibold text-gray-800">Parking</p>
                    <p className="text-gray-600">Free valet parking available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions Card */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Nearby Attractions</h3>
              <div className="space-y-3">
                {[
                  { name: 'Tirumala Tirupathi Devasthanam', distance: '300m away' },
                  { name: 'Sannidhi Park', distance: '230m away' },
                  { name: 'Shopping District', distance: '10 min walk' },
                  { name: 'Gangamma Temple Tirumala', distance: '800m away' }
                ].map((attraction, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{attraction.name}</span>
                    <span className="text-blue-500 font-semibold">{attraction.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="text-6xl mb-6">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Interactive Map</h3>
              <p className="text-gray-600 mb-6">Click below to view our location on Google Maps</p>
              <a
                href="https://www.google.com/maps/place/Sapthagiri+Rest+House,+Balaji+Nagar,+Tirumala,+Tirupati,+Andhra+Pradesh+517504/@13.6819673,79.3507796,16z/data=!4m6!3m5!1s0x3bb2b5623caacaf7:0x521eeeaef79c6791!8m2!3d13.6819834!4d79.3511444!16s%2Fg%2F11gh37_cl_?utm_campaign=ml-le-16204002&g_ep=Eg1tbF8yMDI1MDYzMF8wIOC7DCoASAJQAg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <ExternalLink size={20} />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;