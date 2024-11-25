import React from 'react';
import './css/Footer.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <h2 className='fh1'>Contact Us</h2>
        <p>Bangol Tech IT Solution & Business Consultant</p>
        <p>123 Street, Cityville, Country</p>
        <p>Email: info@bangoltech.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      
      <div className="footer-social">
        <h2 className='fh1'>Follow Us</h2>
        <div className="social-icons">
          <div className='fh2'>
          <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
          {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>

      <div className="footer-map">
        <h2 className='fh1'>Our Location</h2>
        {/* You can embed a map or provide a link to your location */}
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Map</a>
      </div>
    </footer>
  );
};

export default Footer;
