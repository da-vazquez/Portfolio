import React from 'react';
import './HeroSection.css';



const HeroSection = () => {

  return (
    <div className='hero-container'>
      <video src='/videos/phx.mp4' autoPlay muted loop='true'/>
      <h2 className="hero-main-text">Daniel Vazquez</h2>
      <h4 className="hero-sub-text">Full Stack Web Developer</h4>
      <div className='hero-btns'>
        <button className="normal">Learn more</button>
        <button className="danger">Contact Now<span><i class="fas fa-mouse-pointer"></i></span></button>

      </div>
    </div>
  );
}

export default HeroSection;