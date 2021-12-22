import React from 'react';
import "./grabber.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { 
  FaTachometerAlt,
  FaTools,
  FaCheckCircle
 } from 'react-icons/fa';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out-back'
})

const Grabber = () => {

  return (
      <div className='grabber-grid' id='grabber'>
        <div className='grabber-left'>
          <div className='fa-tachometer-alt' data-aos='zoom-in' data-aos-once='true'><FaTachometerAlt/></div>
          <h3>Speed</h3>
          <p>All projects are completed in a timely manner while maintaining the highest degree of detail.</p>
        </div>
        <div className='grabber-middle'>
          <div className='fa-tools' data-aos='zoom-in' data-aos-once='true'><FaTools/></div>
          <h3>Reliability</h3>
          <p>I always use the latest technologies to make my web applications faster and more reliable. Fully compatible on any device!</p>
        </div>
        <div className='grabber-right'>
          <div className='fa-check-circle' data-aos='zoom-in' data-aos-once='true'><FaCheckCircle/></div>
          <h3>Quality</h3>
          <p>Every project undergoes extensive industry standard testing to ensure it's fully functional before being released into production. </p>
        </div>
      </div>
    );
}


export default Grabber;