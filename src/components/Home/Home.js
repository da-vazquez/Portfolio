import './home.css';

import Nav from '../Nav/Nav.js';
import HeroSection from '../HeroSection/HeroSection.js';
import About from '../About/About.js';
import Projects from '../Projects/Projects.js';
import Grabber from '../Grabber/Grabber';
import Contact from '../Contact/Contact';
import Footer from '../Footer/footer';


const Home = () => {

  return (
    <div className='home'>
      <Nav />
      <HeroSection />
      <About/>
      <Projects/>
      <Grabber/>
      <Contact/>
      <Footer/>
  </div>
  )
}


export default Home;