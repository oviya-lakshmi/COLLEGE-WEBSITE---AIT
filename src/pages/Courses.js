import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';
import './Courses.css'; // Create this file for custom styles


const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Information technology",
      description: "Gain in-depth knowledge of cutting-edge IT concepts and innovations. Our course covers programming, networking, cybersecurity, and cloud computing. Stay ahead in the digital era with hands-on training and expert guidance.",
      image: "https://th.bing.com/th/id/OIP.s-dg0mIxOolGwr2-RoovOQHaDz?rs=1&pid=ImgDetMain",
      instructor: "Prem",
      level: "UG & PG",
      badgeColor: "primary"
    },
    {
      id: 2,
      title: "Computer technology",
      description: "Delve into the fundamentals and advancements in computer technology. This course covers software development, hardware systems, artificial intelligence, and data management. Equip yourself with the expertise to thrive in the ever-evolving tech landscape.",
      image: "https://vsc.edu.in/wp-content/uploads/2018/12/Computer.jpg",
      instructor: "Hari",
      level: "UG & PG",
      badgeColor: "success"
    },
    {
      id: 3,
      title: "Electronics engineering",
      description: "Master the principles of electronics engineering, from circuit design to embedded systems. This course covers semiconductors, signal processing, and advanced communication technologies. Develop the skills needed to innovate in the fast-evolving electronics industry.",
      image: "https://img.theweek.in/content/dam/week/news/biztech/2018/january/electronics-commons.jpg",
      instructor: "Gokul",
      level: "UG & PG",
      badgeColor: "info"
    },
    {
      id: 4,
      title: "Automobile Engineering",
      description: "Explore the fundamentals of automobile engineering, including vehicle dynamics, powertrain systems, and automotive design. This course covers emerging technologies like electric and autonomous vehicles. Gain the expertise to drive innovation in the automotive industry.",
      image: "https://static.vecteezy.com/system/resources/previews/017/399/762/non_2x/ev-car-2023-technology-screen-dashboard-car-tech-happy-new-technology-2023-for-transport-automotive-automobile-industrial-and-car-business-car-new-year-2023-technology-auto-car-image-photo.jpg",
      instructor: "Shyam",
      level: "UG",
      badgeColor: "info"
    },
    {
      id: 5,
      title: "Rubber and plastic technology",
      description: "Gain expertise in rubber and plastic technology, covering material properties, processing techniques, and industrial applications. Learn about polymer science, sustainability, and advanced manufacturing methods. Develop the skills needed for innovation in the plastics and rubber industry.",
      image: "https://www.shutterstock.com/image-photo/white-plastic-grain-polymer-granuleshand-260nw-2385556391.jpg",
      instructor: "Sree",
      level: "UG",
      badgeColor: "info"
    },
    {
      id: 6,
      title: "Aeronautical engineering",
      description: "Delve into the world of aeronautical engineering, where you'll study the principles of flight, aircraft structures, and propulsion technologies. This course provides insights into modern aviation innovations and aerospace advancements. Build a strong foundation for a career in the aviation and space sectors.",
      image: "https://img.freepik.com/premium-photo/brand-new-airplane-standing-aircraft-maintenance-hangar-while-aircraft-maintenance-engineer-technician-mechanic-goes-inside-cabin-via-ladder-ramp_861143-5435.jpg",
      instructor: "Ram",
      level: "UG & PG",
      badgeColor: "info"
    },
    {
      id: 7,
      title: "Instrumentation engineering",
      description: "Learn the core concepts of instrumentation engineering, from sensor technology to automation and control systems. This course covers industrial measurement techniques, signal processing, and real-time monitoring. Develop expertise in designing and maintaining precision instruments used across various industries.",
      image: "https://st4.depositphotos.com/1008239/31617/i/450/depositphotos_316177862-stock-photo-automatic-filling-machine-pouring-water.jpg",
      instructor: "Prithvik",
      level: "UG",
      badgeColor: "info"
    },
    {
      id: 8,
      title: "Production engineering",
      description: "Explore the principles of production engineering, focusing on manufacturing processes, industrial automation, and quality control. Gain hands-on knowledge of modern production systems and lean manufacturing techniques. Equip yourself with the skills to optimize efficiency and innovation in industrial operations.",
      image: "https://img.freepik.com/free-photo/portrait-engineers-work-hours-job-site_23-2151589617.jpg",
      instructor: "Niralya",
      level: "UG",
      badgeColor: "info"
    },
    {
      id: 9,
      title: "Civil engineering",
      description: "Discover the fundamentals of civil engineering, including structural design, construction management, and urban planning. This course covers sustainable infrastructure development and modern engineering techniques. Build the expertise to shape the future of cities and communities.",
      image: "https://s3-ap-south-1.amazonaws.com/ricedigitals3bucket/AUPortalContent/2021/05/23204806/Untitled-design-44.png",
      instructor: "Saisha",
      level: "UG & PG",
      badgeColor: "info"
    }
  ];

  return (
    <div className="courses-section">
      <Container className="py-5">
        <h2 className="text-center fw-bold text-dark">Our Courses</h2>
        <p className="text-center text-info">The Best In Our Institute</p>
        <Row className="g-4">
          {courses.map(course => (
            <Col key={course.id} md={4}>
              <Card className="course-card h-100">
                <Card.Img 
                  variant="top" 
                  src={course.image} 
                  className="course-image"
                  alt={course.title}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="d-flex align-items-center">
                      <BiUserCircle className="me-2" />
                      <span>{course.instructor}</span>
                    </div>
                    <span className={`badge bg-${course.badgeColor}`}>
                      {course.level}
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;