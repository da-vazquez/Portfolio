import React, { useState, useEffect } from 'react'
import './nav.css'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const showButton = () => {
    if (window.innerWidth > 800) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  

return (
    <>
    <div className="nav-wrap">
    
        <div className="nav">
            <button className="nav-link" href="#home">Home</button>
            <button className="nav-link" href="#about">About</button>
            <button className="nav-link" href="#resume">Resume</button>
            <button className="nav-link" href="#projects">Projects</button>
            <button className="nav-link" href="#contact">Contact</button>
            
        </div>
        {button ? <i class="fas fa-bars"></i> : null}
        
      </div>
      </>
  )
}



export default Navbar;