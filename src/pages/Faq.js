// src/pages/Faq.js
import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What courses are offered at AIT?",
      answer: "AGNI Institute of Technology offers undergraduate and postgraduate courses in engineering, computer science, management, and applied sciences."
    },
    {
      question: "2. What is the admission process?",
      answer: "Admission is based on the candidate's performance in entrance exams (TNEA, TANCET) and academic records.You can also contact our staffs to get more information. For contacting us visit our contact info page ."
    },
    {
      question: "3. What are the hostel facilities like?",
      answer: "The college provides separate hostels for boys and girls with Wi-Fi, mess, and 24/7 security with utmost neat and clean infrastructure ."
    },
    {
      question: "4. Are there any scholarship programs available?",
      answer: "Yes, AIT offers merit-based and need-based scholarships to deserving students."
    },
    {
      question: "5. What placement opportunities does AIT offer?",
      answer: "AIT has a dedicated placement cell that organizes campus drives, training sessions, and provides placement assistance."
    }
  ];

  return (
    <div className="faq-page">
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Faq;
