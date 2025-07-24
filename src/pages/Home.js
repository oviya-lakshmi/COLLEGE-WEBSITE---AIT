import React from 'react';
import MainCarousel from '../components/Carousel';
import CourseHighlights from '../components/CourseHighlights';
import StatsSection from '../components/StatsSection';
import LogoCarousel from '../components/LogoCarousel';

const Home = () => {
  return (
    <>
      
      <MainCarousel />
      <CourseHighlights />
      <StatsSection />
      <LogoCarousel />
      
    </>
  );
};

export default Home;