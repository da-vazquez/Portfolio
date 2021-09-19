import React from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiGithub,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiPython
 } from 'react-icons/si';

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
      <div className="js" data-aos="slide-left" data-aos-once="true"><SiJavascript/></div>
      <div className="react" data-aos="slide-left" data-aos-once="true"><SiReact/></div>
      <div className="node" data-aos="slide-left" data-aos-once="true"><SiNodeDotJs/></div>
      <div className="github" data-aos="slide-left" data-aos-once="true"><SiGithub/></div>
      <div className="postgres" data-aos="slide-left" data-aos-once="true"><SiPostgresql/></div>
      <div className="css3" data-aos="slide-left" data-aos-once="true"><SiCss3/></div>
      <div className="html5" data-aos="slide-left" data-aos-once="true"><SiHtml5/></div>
      <div className="python" data-aos="slide-left" data-aos-once="true"><SiPython/></div>
    </div>
  </div>
);


export default About;