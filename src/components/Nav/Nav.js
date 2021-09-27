import React, { useState, useEffect } from 'react'
import './nav.css'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [button, setButton] = useState(true);
  const [menu, showMenu] = useState(false)

  const showButton = () => {
    if (window.innerWidth > 650) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const menuHandler = () => {
    showMenu(!menu)
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  

return (
    <>
    <div className="nav-wrap">
      <div className="nav">
        <Link className="nav-link" to="home" smooth={true} duration={1000}>Home</Link>
        <Link className="nav-link" to="about" smooth={true} duration={1000}>About</Link>
        <Link className="nav-link" to="projects" smooth={true} duration={1000}>Showcase</Link>
        <Link className="nav-link" to="grabber" smooth={true} duration={1000}>Results</Link>
        <Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link>
      </div>

        
    {/* mobile menu */}
        
    {button ?
    <div className="nav-mobile">
      <div className="bars"><FaBars id="menu-bars" onClick={menuHandler}/></div>
      <div className={menu ? "link-1" : "link-inactive"}><button>Home</button></div>
      <div href="#about" className={menu ? "link-2" : "link-inactive"}><button>About</button></div>
      <div className={menu ? "link-3" : "link-inactive"}><button>Showcase</button></div>
      <div className={menu ? "link-4" : "link-inactive"}><button>Resume</button></div>
      <div className={menu ? "link-5" : "link-inactive"}><button>Contact</button></div>
      </div>
      : null }
    </div>
  </>
  )
}



export default Navbar;