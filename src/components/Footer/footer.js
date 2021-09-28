import React from 'react';
import "./footer.css";
import { 
  FaGithub,
  FaLinkedin,
  FaMedium
 } from 'react-icons/fa';

const Footer = () => {

  return (
  <div className="footer">
    <div className="footer-content">
      <p><strong>&copy;</strong>Daniel Vazquez 2021, All rights reserved.</p>
      <div className="footer-icons-wrapper">
        <a href="https://github.com/da-vazquez" target="_blank" rel="noopener noreferrer">
          <FaGithub id="github"/></a>
        <a href="https://www.linkedin.com/in/da-vazquez/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin id="linkedin"/></a>
        <a href="https://medium.com/@da.vazquez728" target="_blank" rel="noopener noreferrer">
          <FaMedium id="medium"/></a>   
      </div>
    </div>
  </div>
  )
}


export default Footer;