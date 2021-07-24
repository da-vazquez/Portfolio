import React from 'react';
import './HeroSection.css';



const HeroSection = () => {

  return (
    <div className='hero-container' id="home">
      <video src='/videos/phx.mp4' autoPlay muted loop='true'/>
      <h2>Daniel Vazquez</h2>
      <h4>Full Stack Web Developer</h4>
      <div className='hero-btns'>
        <button className="normal">Learn more</button>
        <button className="danger">Contact Now<span><i class="fas fa-mouse-pointer"></i></span></button>

      </div>
    </div>
  );
}

export default HeroSection;