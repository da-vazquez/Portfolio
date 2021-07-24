import React from 'react';
import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom';
//components
import Nav from './components/Nav/Nav'
import HeroSection from './components/HeroSection/HeroSection.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js'
import Grabber from './components/Grabber/Grabber'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/footer'


function App() {
  return (
    <div className='App'>
      <Router>
      <Nav />
      <HeroSection />
      <About/>
      <Projects/>
      <Grabber/>
      <Contact/>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
