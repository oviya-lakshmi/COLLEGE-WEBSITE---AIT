import React from 'react';
import { BiAward, BiBookAlt, BiTrendingUp } from 'react-icons/bi';
import '../assets/styles/course-highlights.css';

const CourseHighlights = () => {
  return (
    <div id="course" className="container-fluid text-center">
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center p-4" style={{backgroundColor: 'white'}}>
          <BiAward className="fs-1" />
          <h5 className="mt-2">National Awards</h5>
          <p>Recognized for excellence in education, our institution has received multiple national awards.
            We take pride in fostering academic brilliance and innovation.
            Our faculty and students consistently achieve top honors in various fields.
            These accolades reflect our commitment to quality learning and research.
            Join us and be part of an award-winning educational journey!</p>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center p-4" style={{backgroundColor: 'white'}}>
        <BiBookAlt className="fs-1" />
                    <h5 className="mt-2">Best teachers</h5>
          <p>Our institution is home to highly qualified and experienced educators.
            They are dedicated to nurturing students with expert guidance and mentorship.
            Innovative teaching methods make learning engaging and effective.
            Our teachers inspire curiosity, critical thinking, and lifelong learning.
            With their support, students achieve academic excellence and personal growth.</p>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center p-4" style={{backgroundColor: 'white'}}>
        <BiTrendingUp className="fs-1" />
                    <h5 className="mt-2">Many Courses</h5>
          <p>We offer a diverse range of courses across multiple disciplines.
            Our curriculum is designed to meet industry standards and trends.
            Students can choose from beginner to advanced-level programs.
            Experienced faculty ensures a comprehensive learning experience.
            Flexible learning options help students achieve their career goals.</p>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;