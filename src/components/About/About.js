import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  duration: 1000,
  easing: 'ease-in-out-back'
})


const About = () => (
  <div className="about-grid" id="about">
    <div className='box-left'>
        <h3>About</h3>
        <p>I'm a Full Stack Web Developer from Phoenix, Arizona. 
        I like dabbling in various parts of front and backend development and I'm always eager to learn new technologies. 
        In my free time I enjoy gaming and I'm also an avid basketball fan. Go Suns!</p>
        <br/>
        <h3>Skills</h3>
        <p>On the Frontend, I specialize in building dynamic and performant UI's using HTML, CSS, React and various other libraries such as Bootstrap, Material-UI and Spring. I ensure that my Web Apps are fully Accessible and follow Symantic HTML principles so they may enjoyed on any device. On the backend I use a MERN stack to
          build and manage RESTFUL API's that are compliant to the client's specifications and easily consumed by the frontend Web App.</p>    
    </div>
    <div className='box-right'>
        <i data-aos="slide-left" data-aos-once="true" class="fab fa-js-square"></i>
        <i data-aos="slide-left" data-aos-once="true" class="fab fa-react"></i>
        <i data-aos="slide-left" data-aos-once="true" class="fab fa-node"></i>
        <i data-aos="slide-left" data-aos-once="true"  class="fab fa-github"></i>
        <i data-aos="slide-left" data-aos-once="true" class="fas fa-database"></i>
        <i data-aos="slide-left" data-aos-once="true" class="fab fa-html5"></i>
        <i data-aos="slide-left" data-aos-once="true" class="fab fa-css3-alt"></i>
        <i data-aos="slide-left" data-aos-once="true" class="fab fa-python"></i>
    </div>
  </div>
);


export default About;