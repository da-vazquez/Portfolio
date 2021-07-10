import React from 'react';
import Nav from './components/Nav/Nav'
import HeroSection from './components/HeroSection/HeroSection.js';
import About from './components/About/About.js';
import Contact from  './components/Contact/Contact';
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Nav />
      <HeroSection />
      <About/>
    </div>
  );
}

export default App;
