import React, { useState } from 'react';
import './HeroSection.css';

import { FaMousePointer } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import Profile from "./profile-picture.png";


const HeroSection = () => {
  const [mobile, setMobile] = useState(false)

  const styleHandler = () => {
    if (window.innerWidth > 650) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  const handleContactNow = () => {
    window.location.hash = 'contact'
  }

  return (
    <div className='hero-container' id='home'>
      <div className='profile-picture'>
        <img src={Profile} alt='developer portfolio'/>
      </div>
      <h2>Daniel Vazquez</h2>
      <Typewriter
        options={{
          strings: [`Software Engineer`],
          autoStart: true,
          loop: true,
          pauseFor: 30000
        }}
      />
      <div className='hero-btns'>
        <button onClick={handleContactNow} className='danger'>Contact Now<span>
          <FaMousePointer className='fa-mouse-pointer'/></span></button>
      </div>
    </div>
  );
}

export default HeroSection;