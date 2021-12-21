import React from 'react';
import "./App.css";
//components
import Nav from './components/Nav/Nav';
import HeroSection from './components/HeroSection/HeroSection.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Grabber from './components/Grabber/Grabber';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className='App'>
      <Nav />
      <HeroSection />
      <About/>
      <Projects/>
      <Grabber/>
      <Contact/>
      <Footer/>
  </div>
  );
}

export default App;
