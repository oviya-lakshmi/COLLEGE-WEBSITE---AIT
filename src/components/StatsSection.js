import React from 'react';
import './../assets/styles/stats-section.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-3">
            <h2 className="stat-number">15</h2>
            <p className="stat-label">TEACHERS</p>
          </div>
          <div className="col-md-3">
            <h2 className="stat-number">+ 10 K</h2>
            <p className="stat-label">CUSTOMERS</p>
          </div>
          <div className="col-md-3">
            <h2 className="stat-number">+ 47</h2>
            <p className="stat-label">COURSES</p>
          </div>
          <div className="col-md-3">
            <h2 className="stat-number">10</h2>
            <p className="stat-label">YEARS OF EXPERIENCE</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;