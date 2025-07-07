import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;