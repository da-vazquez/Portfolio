import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from 'react-scroll';
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
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  

return (
    <>
    <div className='nav-wrap'>
      <div className='nav'>
        <Link className='nav-link' to='home' smooth={true} duration={1000}>Home</Link>
        <Link className='nav-link' to='about' smooth={true} duration={1000}>About</Link>
        <Link className='nav-link' to='projects' smooth={true} duration={1000}>Showcase</Link>
        <Link className='nav-link' to='grabber' smooth={true} duration={1000}>Results</Link>
        <Link className='nav-link' to='contact' smooth={true} duration={1000}>Contact</Link>
      </div>

        
    {/* mobile menu */}
        
    {button ?
    <div className='nav-mobile'>
      <Link className='bars' to='#'><FaBars id='menu-bars' onClick={menuHandler}/></Link>
      <Link className={menu ? 'link-1' : 'link-inactive'} to='home' smooth={true} duration={500}>Home</Link>
      <Link className={menu ? 'link-2' : 'link-inactive'} to='about' smooth={true} duration={500}>About</Link>
      <Link className={menu ? 'link-3' : 'link-inactive'} to='projects' smooth={true} duration={500}>Showcase</Link>
      <Link className={menu ? 'link-4' : 'link-inactive'} to='grabber' smooth={true} duration={500}>Results</Link>
      <Link className={menu ? 'link-5' : 'link-inactive'} to='contact' smooth={true} duration={500}>Contact</Link>
      </div>
      : null }
    </div>
  </>
  );
}



export default Navbar;