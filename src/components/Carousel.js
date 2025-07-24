import React from 'react';
import { Carousel } from 'react-bootstrap';
//import './../assets/styles/carousel.css';
const MainCarousel = () => {
  return (
    <>
      
      <Carousel interval={3000} controls={false} indicators={false}>
      <Carousel.Item>
            <img
              className="d-block w-100 h-100" // Added h-100
              style={{ objectFit: "cover" }} // Ensures images fill space
              src="https://images.unsplash.com/photo-1562774053-701939374585?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              style={{ objectFit: "cover" }}
              src="https://media.istockphoto.com/id/1406888053/photo/a-group-of-cheerful-people-at-graduation-holding-diplomas-or-certificates-up-together-and.jpg?s=612x612&w=0&k=20&c=8LRkx77cpb1clqj2tHqOY--uO8Mj6DB8Qd1Y3RdDRyQ="
              alt="Second slide"
            />
          </Carousel.Item>
      </Carousel>
    </>
  );
}
export default MainCarousel;