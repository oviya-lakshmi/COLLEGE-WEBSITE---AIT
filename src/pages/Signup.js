import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { BiUserPlus } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    student: { id: '', email: '', password: '', confirmPassword: '' },
    staff: { id: '', email: '', password: '', confirmPassword: '' }
  });
  const [errors, setErrors] = useState({
    student: {},
    staff: {}
  });
  const [success, setSuccess] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved data from localStorage
  useEffect(() => {
    const savedRole = localStorage.getItem('signupRole');
    const savedFormData = localStorage.getItem('signupFormData');
    const savedPrivacy = localStorage.getItem('signupPrivacyAgreed');
    const savedRemember = localStorage.getItem('signupRememberMe');

    if (savedRole === 'student' || savedRole === 'staff') {
      setRole(savedRole);
    }
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
    if (savedPrivacy) {
      setPrivacyAgreed(JSON.parse(savedPrivacy));
    }
    if (savedRemember) {
      setRememberMe(JSON.parse(savedRemember));
    }
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem('signupFormData', JSON.stringify(formData));
      localStorage.setItem('signupPrivacyAgreed', JSON.stringify(privacyAgreed));
      localStorage.setItem('signupRememberMe', JSON.stringify(rememberMe));
      localStorage.setItem('signupRole', role);
    } else {
      localStorage.removeItem('signupFormData');
      localStorage.removeItem('signupPrivacyAgreed');
      localStorage.removeItem('signupRememberMe');
      localStorage.removeItem('signupRole');
    }
  }, [formData, privacyAgreed, rememberMe, role]);

  const handleChange = (e, field) => {
    setFormData(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        [field]: e.target.value
      }
    }));
  };

  const validateForm = () => {
    const currentData = formData[role];
    const newErrors = {};

    // ID validation
    if (role === 'student') {
      if (!/^[0-9]{9,12}$/.test(currentData.id)) {
        newErrors.id = 'Registration number must be 9-12 digits';
      }
    } else {
      if (!/^[A-Za-z0-9]{6,12}$/.test(currentData.id)) {
        newErrors.id = 'Staff ID must be 6-12 alphanumeric characters';
      }
    }

    // Email validation - now only checks for @gmail.com
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._%+-]*@gmail\.com$/;
    if (!emailRegex.test(currentData.email)) {
      newErrors.email = 'Please enter a valid Gmail address (example@gmail.com)';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(currentData.password)) {
      newErrors.password = 'Password must contain: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char';
    }

    // Confirm password
    if (currentData.password !== currentData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Privacy policy
    if (!privacyAgreed) {
      newErrors.privacy = 'You must agree to the Privacy Policy';
    }

    setErrors(prev => ({
      ...prev,
      [role]: newErrors
    }));

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(`${role === 'student' ? 'Student' : 'Staff'} account created successfully!`);
      
      if (!rememberMe) {
        setFormData({
          student: { id: '', email: '', password: '', confirmPassword: '' },
          staff: { id: '', email: '', password: '', confirmPassword: '' }
        });
        setPrivacyAgreed(false);
      }
    }, 1500);
  };

  const currentData = formData[role];
  const currentErrors = errors[role] || {};

  return (
    <Container className="signup-container">
      <div className="signup-icon text-center">
        <BiUserPlus size={50} color="#3AAFA9" />
      </div>
      
      <h2 className="text-center">Create Account</h2>
      
      <div className="role-selection mb-4">
        <div 
          className={`role-option ${role === 'student' ? 'selected' : ''}`}
          onClick={() => setRole('student')}
        >
          Student
        </div>
        <div 
          className={`role-option ${role === 'staff' ? 'selected' : ''}`}
          onClick={() => setRole('staff')}
        >
          Staff
        </div>
      </div>
      
      {currentErrors.general && (
        <Alert variant="danger" className="mb-3">
          {currentErrors.general}
        </Alert>
      )}
      
      {success && (
        <Alert variant="success" className="mb-3">
          {success}
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>{role === 'student' ? 'Registration Number' : 'Staff ID'}</Form.Label>
          <Form.Control
            type="text"
            value={currentData.id}
            onChange={(e) => handleChange(e, 'id')}
            placeholder={role === 'student' ? 'Enter your 9-12 digit reg number' : 'Enter your staff ID'}
            isInvalid={!!currentErrors.id}
          />
          <Form.Control.Feedback type="invalid">
            {currentErrors.id}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            value={currentData.email}
            onChange={(e) => handleChange(e, 'email')}
            placeholder="example@gmail.com"
            isInvalid={!!currentErrors.email}
          />
          <Form.Control.Feedback type="invalid">
            {currentErrors.email}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
            type="password"
            value={currentData.password}
            onChange={(e) => handleChange(e, 'password')}
            placeholder="Create a strong password"
            isInvalid={!!currentErrors.password}
          />
          <Form.Control.Feedback type="invalid">
            {currentErrors.password}
          </Form.Control.Feedback>
          <Form.Text muted>
            Must contain: 8+ characters, uppercase, lowercase, number, special character
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={currentData.confirmPassword}
            onChange={(e) => handleChange(e, 'confirmPassword')}
            placeholder="Re-enter your password"
            isInvalid={!!currentErrors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">
            {currentErrors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3 form-check">
          <Form.Check
            type="checkbox"
            id="remember-me"
            label="Remember me"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
        </Form.Group>
        
        <Form.Group className="mb-3 form-check">
          <Form.Check
            type="checkbox"
            id="privacy-checkbox"
            label={
              <span>
                I agree to the <a href="/privacy-policy" className="text-decoration-none" style={{ color: '#3AAFA9' }}>Privacy Policy</a>
              </span>
            }
            checked={privacyAgreed}
            onChange={() => setPrivacyAgreed(!privacyAgreed)}
            isInvalid={!!currentErrors.privacy}
          />
          {currentErrors.privacy && (
            <div className="text-danger small">{currentErrors.privacy}</div>
          )}
        </Form.Group>
        
        <Button variant="primary" type="submit" className="w-100 mb-3" disabled={isSubmitting}>
          {isSubmitting ? 'Signing Up...' : `Sign Up as ${role === 'student' ? 'Student' : 'Staff'}`}
        </Button>
      </Form>
      
      <div className="text-center mt-3">
        <p>
          Already have an account?{' '}
          <a href="/login" className="text-decoration-none" style={{ color: '#3AAFA9', fontWeight: 'bold' }}>
            Login Here
          </a>
        </p>w
      </div>
    </Container>
  );
};

export default Signup;