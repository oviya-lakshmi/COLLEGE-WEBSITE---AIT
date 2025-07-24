import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  const [role, setRole] = useState(() => {
    return localStorage.getItem('loginRole') || null;
  });

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('loginFormData');
    return savedData ? JSON.parse(savedData) : {
      student: { reg: '', email: '', password: '', captcha: '' },
      staff: { id: '', email: '', password: '', captcha: '' }
    };
  });

  const [privacyAgreed, setPrivacyAgreed] = useState(() => {
    const savedPrivacy = localStorage.getItem('loginPrivacyAgreed');
    return savedPrivacy ? JSON.parse(savedPrivacy) : { student: false, staff: false };
  });

  const [rememberMe, setRememberMe] = useState(() => {
    return JSON.parse(localStorage.getItem('loginRememberMe') || 'false');
  });

  const [studentCaptcha, setStudentCaptcha] = useState({ text: '', value: '' });
  const [staffCaptcha, setStaffCaptcha] = useState({ text: '', value: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Initialize captcha when role is set
  useEffect(() => {
    if (role) {
      generateCaptcha(role);
    }
  }, [role]);

  // Persist data to localStorage
  useEffect(() => {
    localStorage.setItem('loginFormData', JSON.stringify(formData));
    localStorage.setItem('loginPrivacyAgreed', JSON.stringify(privacyAgreed));
    localStorage.setItem('loginRememberMe', JSON.stringify(rememberMe));
    if (role) {
      localStorage.setItem('loginRole', role);
    }
  }, [formData, privacyAgreed, rememberMe, role]);

  const generateCaptcha = (userType) => {
    let num1, num2;
    if (userType === 'staff') {
      num1 = Math.floor(Math.random() * 90) + 10;
      num2 = Math.floor(Math.random() * 9) + 1;
    } else {
      num1 = Math.floor(Math.random() * 9) + 1;
      num2 = Math.floor(Math.random() * 9) + 1;
    }
    const captchaValue = num1 + num2;
    const captchaText = `Solve: ${num1} + ${num2}`;
    
    if (userType === 'staff') {
      setStaffCaptcha({ text: captchaText, value: captchaValue });
    } else {
      setStudentCaptcha({ text: captchaText, value: captchaValue });
    }
  };

  const selectRole = (selectedRole) => {
    setRole(selectedRole);
    setLoginError('');
    setLoginSuccess(false);
  };

  const handleChange = (e, userType) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [userType]: {
        ...prev[userType],
        [name]: value
      }
    }));
    setLoginError('');
    setLoginSuccess(false);
  };

  const refreshCaptcha = () => {
    generateCaptcha(role);
    setFormData(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        captcha: ''
      }
    }));
  };

  const handlePrivacyCheck = (userType) => {
    setPrivacyAgreed(prev => ({
      ...prev,
      [userType]: !prev[userType]
    }));
  };

  const handlePrivacyPolicyClick = (e, userType) => {
    e.preventDefault();
    const stateToSave = {
      formData,
      privacyAgreed,
      rememberMe,
      role,
      captcha: userType === 'staff' ? staffCaptcha : studentCaptcha
    };
    navigate('/PrivacyPolicy', { state: stateToSave });
  };

  useEffect(() => {
    const state = window.history.state?.usr;
    if (state) {
      setFormData(state.formData);
      setPrivacyAgreed(state.privacyAgreed);
      setRememberMe(state.rememberMe);
      setRole(state.role);
      if (state.role === 'staff') {
        setStaffCaptcha(state.captcha);
      } else if (state.role === 'student') {
        setStudentCaptcha(state.captcha);
      }
    }
  }, []);

  const validateForm = (userType) => {
    const newErrors = {};
    const data = formData[userType];

    if (!/^[0-9]+$/.test(userType === 'student' ? data.reg : data.id)) {
      newErrors.regId = 'Only numbers are allowed';
    }

    if (!/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)) {
      newErrors.email = 'Enter a valid Email ID';
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
      newErrors.password = 'Password must contain at least 8 characters, an uppercase letter, a lowercase letter, a number, and a special character';
    }

    const captchaValue = userType === 'staff' ? staffCaptcha.value : studentCaptcha.value;
    if (data.captcha !== captchaValue.toString()) {
      newErrors.captcha = 'Incorrect Captcha';
    }

    if (!privacyAgreed[userType]) {
      newErrors.privacy = 'You must agree to the Privacy Policy';
    }

    setErrors({ ...errors, [userType]: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e, userType) => {
    e.preventDefault();
    setLoginError('');
    setLoginSuccess(false);
    
    if (!validateForm(userType)) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setLoginSuccess(true);
      
      if (!rememberMe) {
        localStorage.removeItem('loginFormData');
        localStorage.removeItem('loginPrivacyAgreed');
        localStorage.removeItem('loginRole');
        localStorage.removeItem('loginRememberMe');
      }
    }, 1500);
  };

  return (
    <Container className="login-container" style={{ minWidth: '300px' }}>
      <div className="login-icon text-center">
        <BiUserCircle size={50} color="#3AAFA9" />
      </div>
      
      <h2 className="text-center">Login</h2>
      <div className="role-selection">
        <div 
          className={`role-option ${role === 'student' ? 'selected' : ''}`}
          onClick={() => selectRole('student')}
        >
          Student
        </div>
        <div 
          className={`role-option ${role === 'staff' ? 'selected' : ''}`}
          onClick={() => selectRole('staff')}
        >
          Staff
        </div>
      </div>
      
      {loginError && (
        <Alert variant="danger" className="mb-3">
          {loginError}
        </Alert>
      )}
      
      {loginSuccess && (
        <Alert variant="success" className="mb-3">
          {role === 'student' ? 'Student' : 'Staff'} Login Successful!
        </Alert>
      )}
      
      {/* Student Login Form */}
      {role === 'student' && (
        <div className="login-form">
          <h3>Student Login</h3>
          <Form onSubmit={(e) => handleSubmit(e, 'student')}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="reg"
                placeholder="Register Number"
                value={formData.student.reg}
                onChange={(e) => handleChange(e, 'student')}
                isInvalid={!!errors.student?.regId}
              />
              <Form.Control.Feedback type="invalid">
                {errors.student?.regId}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Student Email"
                value={formData.student.email}
                onChange={(e) => handleChange(e, 'student')}
                isInvalid={!!errors.student?.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.student?.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.student.password}
                onChange={(e) => handleChange(e, 'student')}
                isInvalid={!!errors.student?.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.student?.password}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <div className="captcha-container">
                <div className="captcha-text">{studentCaptcha.text}</div>
                <span className="captcha-refresh" onClick={refreshCaptcha}>↻</span>
              </div>
              <Form.Control
                type="text"
                name="captcha"
                placeholder="Enter captcha"
                value={formData.student.captcha}
                onChange={(e) => handleChange(e, 'student')}
                isInvalid={!!errors.student?.captcha}
              />
              <Form.Control.Feedback type="invalid">
                {errors.student?.captcha}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3 form-check remember-me">
              <Form.Check
                type="checkbox"
                id="student-remember-me"
                label="Remember me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3 form-check">
              <Form.Check
                type="checkbox"
                id="student-privacy-checkbox"
                label={
                  <span>
                    I have read the <a href="/PrivacyPolicy" onClick={(e) => handlePrivacyPolicyClick(e, 'student')} className="text-decoration-none" style={{ color: '#3AAFA9' }}>Privacy Policy</a>
                  </span>
                }
                checked={privacyAgreed.student}
                onChange={() => handlePrivacyCheck('student')}
                isInvalid={!!errors.student?.privacy}
              />
              {errors.student?.privacy && (
                <div className="text-danger small">{errors.student.privacy}</div>
              )}
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login as Student'}
            </Button>
          </Form>
        </div>
      )}
      
      {/* Staff Login Form */}
      {role === 'staff' && (
        <div className="login-form">
          <h3>Staff Login</h3>
          <Form onSubmit={(e) => handleSubmit(e, 'staff')}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="id"
                placeholder="Staff ID"
                value={formData.staff.id}
                onChange={(e) => handleChange(e, 'staff')}
                isInvalid={!!errors.staff?.regId}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staff?.regId}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Staff Email"
                value={formData.staff.email}
                onChange={(e) => handleChange(e, 'staff')}
                isInvalid={!!errors.staff?.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staff?.email}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.staff.password}
                onChange={(e) => handleChange(e, 'staff')}
                isInvalid={!!errors.staff?.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staff?.password}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <div className="captcha-container">
                <div className="captcha-text">{staffCaptcha.text}</div>
                <span className="captcha-refresh" onClick={refreshCaptcha}>↻</span>
              </div>
              <Form.Control
                type="text"
                name="captcha"
                placeholder="Enter captcha"
                value={formData.staff.captcha}
                onChange={(e) => handleChange(e, 'staff')}
                isInvalid={!!errors.staff?.captcha}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staff?.captcha}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3 form-check remember-me">
              <Form.Check
                type="checkbox"
                id="staff-remember-me"
                label="Remember me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3 form-check">
              <Form.Check
                type="checkbox"
                id="staff-privacy-checkbox"
                label={
                  <span>
                    I have read the <a href="/PrivacyPolicy" onClick={(e) => handlePrivacyPolicyClick(e, 'staff')} className="text-decoration-none" style={{ color: '#3AAFA9' }}>Privacy Policy</a>
                  </span>
                }
                checked={privacyAgreed.staff}
                onChange={() => handlePrivacyCheck('staff')}
                isInvalid={!!errors.staff?.privacy}
              />
              {errors.staff?.privacy && (
                <div className="text-danger small">{errors.staff.privacy}</div>
              )}
            </Form.Group>
            
            <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login as Staff'}
            </Button>
          </Form>
        </div>
      )}
      
      <div className="text-center mt-3">
        <p>
          Back to Home?{' '}
          <a href="/" className="text-decoration-none" style={{ color: '#3AAFA9', fontWeight: 'bold' }}>
            Click Here
          </a>
        </p>
        <p>
           Haven't logged in?{' '}
          <Link to="/signup" className="text-decoration-none" style={{ color: '#3AAFA9', fontWeight: 'bold' }}>
            Sign up here
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;