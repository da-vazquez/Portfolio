import React from 'react';
import './HeroSection.css';

import { FaMousePointer } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';


const HeroSection = () => {

  const handleLearnMore = () => {
    window.location.hash = 'about' 
  }

  const handleContactNow = () => {
    window.location.hash = 'contact'
  }

  return (
    <div className='hero-container' id='home'>
      <h2>Daniel Vazquez</h2>
      <Typewriter
        options={{
          strings: ['Full Stack Web Developer'],
          autoStart: true,
          loop: true,
          pauseFor: 30000
        }}
      />
      <div className='hero-btns'>
        <button onClick={handleLearnMore} className='normal'>Learn more</button>
        <button onClick={handleContactNow} className='danger'>Contact Now<span>
          <FaMousePointer className='fa-mouse-pointer'/></span></button>
      </div>
    </div>
  );
}

export default HeroSection;