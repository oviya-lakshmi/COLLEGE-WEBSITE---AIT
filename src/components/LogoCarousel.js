import React, { useEffect } from 'react';
import './../assets/styles/logo-carousel.css';

const LogoCarousel = () => {
  useEffect(() => {
    // Animation will be handled by CSS, but you could add JS logic here if needed
  }, []);

  const logos = [
    { src: "https://hdqwalls.com/wallpapers/amazon-4k-logo-qhd.jpg", alt: "Amazon" },
    { src: "https://www.interviewchacha.com/images/company_logos/mindtree.jpeg", alt: "Tata" },
    { src: "https://www.pngmart.com/files/16/Google-Logo-PNG-Image.png", alt: "Google" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzzQHHO-mP4unIel0CpG4HLRtLnAV-CkGmA&s", alt: "Apple" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUgO3vWyUWTMpox3cTp2e4ZnEgy4GUFGho-Q&s", alt: "Microsoft" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-PcKDlWVKGuCIAMHcvuR8W5ibVpcEBp57hw&s", alt: "Flipkart" }
  ];

  return (
    <>
      <h2 className="placement-text">we offer guarenteed placements on :</h2>
      <div className="carousel-containerv">
        <div className="carousel-trackv">
          {/* Duplicate logos for infinite scroll effect */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="carousel-itemv">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;