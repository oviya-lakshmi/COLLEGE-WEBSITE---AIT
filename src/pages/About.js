import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    const [activeBox, setActiveBox] = useState(null);

  const handleBoxClick = (boxName) => {
    setActiveBox(boxName);
    // Remove active state after animation completes
    setTimeout(() => setActiveBox(null), 1500);
  };

  return (
    <Container className="about-container">
      <div className="main-content">
        <h1>About the College</h1>
        <img 
          src="https://images.shiksha.com/mediadata/images/1490782869phpcyxSKw.jpeg" 
          alt="College Campus" 
          className="college-image"
        />

        <p>
          Agni Institute Of Technology, an autonomous institution affiliated to Anna University, Chennai, was established in 1997 under the aegis of Agni Educational Trust. The College has grown from strength to strength in the last 25 years, progressing towards Excellence in Engineering Education, Research, and Development.
        </p>
        
        <p>
          The college started with 3 Undergraduate programs in Engineering with an annual intake of 180 students in 1997. It now offers 18 Undergraduate and 9 Postgraduate programs, including an MBA program, with an annual intake of over 2070 students. The approval of AICTE and affiliation with Anna University reflects its progressive academic reputation.
        </p>

        <div 
        className={`vision-section content-box ${activeBox === 'vision' ? 'active-box' : ''}`}
        onClick={() => handleBoxClick('vision')}
        onTouchStart={() => handleBoxClick('vision')}
      >
          <h2 className="section-title">Vision</h2>
          <p>To be an institution of excellence in Engineering, Technology and Management Education & Research. To provide competent and ethical professionals with a concern for society.</p>
        </div>

        <div 
        className={`mission-section content-box ${activeBox === 'mission' ? 'active-box' : ''}`}
        onClick={() => handleBoxClick('mission')}
        onTouchStart={() => handleBoxClick('mission')}
      >
          <h2 className="section-title">Mission</h2>
          <p>To impart quality technical education imbibed with proficiency and humane values.<br />
          To provide the right ambience and opportunities for the students to develop into creative, talented, and globally competent professionals.<br />
          To promote research and development in technology and management for the benefit of society.</p>
        </div>

        <div 
        className={`assets-section content-box ${activeBox === 'assets' ? 'active-box' : ''}`}
        onClick={() => handleBoxClick('assets')}
        onTouchStart={() => handleBoxClick('assets')}
      >

          <h2 className="section-title">The major assets of the College</h2>
          <ul>
            <li>Eminent and well-experienced faculty</li>
            <li>Research facility</li>
            <li>NAAC 'A++' Grade awarded Institution</li>
            <li>NBA Accredited departments</li>
            <li>Accredited by Tata Consultancy Services</li>
            <li>ISO certified</li>
            <li>MOUs on important issues such as research, academic/cultural exchange, and industry interaction</li>
            <li>Career guidance cell</li>
            <li>Entrepreneurship cell</li>
            <li>Value addition in terms of employment and higher studies</li>
            <li>Dedicated placement cell</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;