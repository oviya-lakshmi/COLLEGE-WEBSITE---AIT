import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SecondaryNav from './SecondaryNav';
import Footer from './Footer';
import './Layout.css';
import BackgroundCircles from './BackgroundCircles';
import useResponsive from '../hooks/useResponsive'; // Custom hook for responsive logic

const Layout = ({ children, showSecondaryNav = true }) => {
  const { isMobile } = useResponsive(); // Get responsive state

  return (
    <>
      <BackgroundCircles />
      <Navbar />
      {showSecondaryNav && <SecondaryNav isMobile={isMobile} />}
      <main className="main-content-container">
        <div className="centered-content">
          <Outlet /> 
          {children}
        </div>
      </main>
      <Footer isMobile={isMobile} />
    </>
  );
};

export default Layout;