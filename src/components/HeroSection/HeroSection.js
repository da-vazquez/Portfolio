import React from 'react';
import './HeroSection.css';
import { FaMousePointer } from 'react-icons/fa';

const HeroSection = () => {

  const handleLearnMore = () => {
    window.location.hash = "about" 
  }

  const handleContactNow = () => {
    window.location.hash = "contact"
  }

  return (
    <div className='hero-container' id="home">
      <video src='/videos/phx.mp4' autoPlay muted loop={true}/>
      <h2>Daniel Vazquez</h2>
      <h4>Full Stack Web Developer</h4>
      <div className='hero-btns'>
        <button onClick={handleLearnMore} className="normal">Learn more</button>
        <button onClick={handleContactNow} className="danger">Contact Now<span>
          <FaMousePointer className="fa-mouse-pointer"/></span></button>
      </div>
    </div>
  );
}

export default HeroSection;