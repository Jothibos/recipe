 // Footer.js
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Recipe App. All rights reserved.</p>
        <div className="social-icons">
          <FaInstagram className="social-icon instagram" />
          <FaFacebook className="social-icon facebook" />
          <FaTwitter className="social-icon twitter" />
          <FaWhatsapp className="social-icon whatsapp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
