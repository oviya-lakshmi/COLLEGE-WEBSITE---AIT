import React from 'react';
import { BiGlobe, BiUser, BiShareAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo and Language Dropdown */}
        <div className="logo-dropdown d-flex align-items-center">
          <BiGlobe className="globe-icon me-2" size={24} />
          <span className="logo me-3">languages</span>
          <div className="dropdown">
            <button 
              className="btn btn-sm dropdown-toggle" 
              type="button" 
              id="languageDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              Select Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="languageDropdown">
              <li><a className="dropdown-item" href="#">Russian</a></li>
              <li><a className="dropdown-item" href="#">German</a></li>
              <li><a className="dropdown-item" href="#">Spanish</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Dropdown */}
        <div className="dropdown ms-3">
          <button 
            className="btn btn-sm dropdown-toggle" 
            type="button" 
            id="socialDropdown" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            <BiShareAlt className="me-1" /> Our Social
          </button>
          <ul className="dropdown-menu" aria-labelledby="socialDropdown">
            <li><a className="dropdown-item" href="#">Facebook</a></li>
            <li><a className="dropdown-item" href="#">Dribbble</a></li>
            <li><a className="dropdown-item" href="#">Instagram</a></li>
            <li><a className="dropdown-item" href="#">Twitter</a></li>
          </ul>
        </div>

        {/* Login Link - Using React Router */}
        <div className="auth-section ms-auto">
          <Link to="/login" className="auth-item btn btn-link text-decoration-none">
            <BiUser className="me-1" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;