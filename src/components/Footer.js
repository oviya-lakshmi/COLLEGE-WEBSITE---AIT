import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import '../assets/styles/footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="footer-logo">
          <h2>AGNI INSTITUTE OF TECHNOLOGY</h2>
        </div>
        
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterest /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        
        <p className="copyright">
          &copy; Copyright 2025 ait website.All rights reserved
        </p>
        
        <div className="footer-links">
        <Link to="/">HOME</Link> | <Link to="/about">ABOUT US</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;