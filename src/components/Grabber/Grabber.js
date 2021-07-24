import React from 'react';
import "./grabber.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  easing: 'ease-in-out-back'
})

const Grabber = () => {

  return (
      <div className="grabber-grid" id="grabber">
        <div className="grabber-left">
          <i data-aos="zoom-in" data-aos-once="true" class="fas fa-tachometer-alt"></i>
          <h3>Speed</h3>
          <p>Most projects are completed in a matter of days so you can focus on what really matters, managing and running your business.</p>
        </div>
        <div className="grabber-middle">
          <i data-aos="zoom-in" data-aos-once="true" class="fas fa-tools"></i>
          <h3>Reliability</h3>
          <p>The latest technologies to make your web application faster and more reliable. Fully compatible on any device!</p>
        </div>
        <div className="grabber-right">
          <i data-aos="zoom-in" data-aos-once="true" class="fas fa-hand-holding-heart"></i>
          <h3>Care</h3>
          <p>Every project is treated with the highest level of care and attention to detail no matter the size or complexity.</p>
        </div>
      </div>
    
    )
}


export default Grabber;