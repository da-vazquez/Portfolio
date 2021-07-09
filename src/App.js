import React from 'react';
import Nav from './components/Nav/Nav'
import HeroSection from './components/HeroSection/HeroSection.js';
import About2 from './components/About/About2.js';
import "./App.css"

function App() {
  return (
    <div className='App'>
      <Nav />
      <HeroSection />
      <About2 />
    </div>
  );
}

export default App;
