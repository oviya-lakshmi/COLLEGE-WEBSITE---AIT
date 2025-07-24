import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './../assets/styles/secondary-nav.css';

const SecondaryNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="secondary-navbar">
      {/* Brand Section with Toggle Button */}
      <div className="brand">
        <div className="logo-container">
          <img src={require("../assets/images/logo.jpg")} alt="University Logo" />
        </div>
        <h3>AIT</h3>

        {/* Hamburger Toggle Button for Mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Nav Links (Collapsed on mobile if menuOpen is false) */}
      <ul className={`secondary-nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/courses">COURSES</Link></li>
        <li>
          <Link
            to="/about"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            ABOUT US
          </Link>
        </li>
        <li><Link to="/faq">FAQ'S</Link></li>
        <li><Link to="/rules" className="active">RULES & REGULATIONS</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/privacypolicy">PRIVACY POLICY</Link></li>
        <li><Link to="/careers">CAREERS</Link></li>
      </ul>

      {/* Icons (Search) */}
      <div className="icons">
        <div className="search">
          <BiSearch />
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNav;
