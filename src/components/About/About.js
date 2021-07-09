import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

const About = () => (
  <div data-aos="fade" data-aos-easing="ease-in-out" className="container">
    <div className='box1'>
    </div>
    <div className='box2'>Box 2</div>
    <div className='box3'>Box 3</div>
    <div className='box4'>Box 4</div>
    <div className='box5'>Box 5</div>
    <div className='sidebar'>about me.</div>
    
  </div>
);


export default About;