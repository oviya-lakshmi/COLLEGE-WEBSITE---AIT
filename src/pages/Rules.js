// src/pages/Rules.js
import React from 'react';
import './Rules.css';

const Rules = () => {
  return (
    <div className="rules-container">
      <h1 className="header">Rules & Regulations</h1>

      {/* Image Section */}
      <div className="image-container">
        <img 
          src="https://www.pcas.edu.in/images/backgrounds/library%20img.jpeg" 
          alt="AIT College Campus" 
        />
      </div>

      {/* Rules Section */}
      <div className="rules-section">
        {/* Column 1 */}
        <div className="rules-column">
          <ul>
            <li><i className="bi bi-exclamation-circle"></i> Ragging or harassment of students in any form is strictly prohibited.</li>
            <li><i className="bi bi-shield-check"></i> Violators will face disciplinary actions and police complaints.</li>
            <li><i className="bi bi-person-fill"></i> Boys must wear formal shirts and tuck them in while on campus.</li>
            <li><i className="bi bi-person-fill"></i> Girls should wear either sarees or churidars with dupatta.</li>
            <li><i className="bi bi-emoji-angry"></i> Smoking, drinking, and drug use are strictly prohibited.</li>
            <li><i className="bi bi-x-octagon"></i> No disturbances during exams; violations may lead to expulsion.</li>
            <li><i className="bi bi-slash-circle"></i> Derogatory remarks or abusive language towards staff or students is prohibited.</li>
            <li><i className="bi bi-badge-ad"></i> ID cards are mandatory in the campus premises.</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="rules-column">
          <ul>
            <li><i className="bi bi-calendar-check"></i> Attendance below 75% (65% on medical/sports) leads to disqualification from University Examination.</li>
            <li><i className="bi bi-envelope-exclamation"></i> No leave/absence without prior written application to the HOD.</li>
            <li><i className="bi bi-person-x"></i> Unexplained absence for more than 3 days results in removal from rolls without parental explanation.</li>
            <li><i className="bi bi-door-closed"></i> Students must stay inside the classroom during class hours.</li>
            <li><i className="bi bi-brush"></i> Maintain cleanliness in classrooms and college premises.</li>
            <li><i className="bi bi-exclamation-triangle"></i> Damaging college property, using indecent language, or misbehavior may lead to dismissal.</li>
            <li><i className="bi bi-person-lock"></i> Absolute discipline inside classrooms and the campus is mandatory.</li>
            <li><i className="bi bi-people"></i> No entertaining outsiders without prior college authority permission.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rules;