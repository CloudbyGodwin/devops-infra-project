import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="programs">
        <Programs />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;