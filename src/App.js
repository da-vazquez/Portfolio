import React from 'react';
import { withTransaction } from '@elastic/apm-rum-react'
import "./App.css";
//components
import Nav from './components/Nav/Nav';
import HeroSection from './components/HeroSection/HeroSection.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Grabber from './components/Grabber/Grabber';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';

import { init as initApm } from '@elastic/apm-rum'

const apm = initApm({
  serviceName: 'portfolio-dv',
  serverUrl: process.env.REACT_APP_APM_SERVER_URL,
  serviceVersion: '1.0',
  active: true
})

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

export default withTransaction('AppComponent', 'component')(App);
