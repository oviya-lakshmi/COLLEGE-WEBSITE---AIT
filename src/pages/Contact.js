import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    // Initialize form data with values from localStorage if available
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('contactFormData');
        return savedData ? JSON.parse(savedData) : {
            name: '',
            email: '',
            phone: '',
            address: '',
            comments: ''
        };
    });

    // Get login data from localStorage if available
    const [loginData, setLoginData] = useState(() => {
        const savedLoginData = localStorage.getItem('loginFormData');
        return savedLoginData ? JSON.parse(savedLoginData) : null;
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [rememberMe, setRememberMe] = useState(() => {
        return JSON.parse(localStorage.getItem('contactRememberMe') || 'false');
    });

    // Save form data to localStorage whenever it changes
    useEffect(() => {
        if (rememberMe) {
            localStorage.setItem('contactFormData', JSON.stringify(formData));
        }
    }, [formData, rememberMe]);

    // Save rememberMe state to localStorage
    useEffect(() => {
        localStorage.setItem('contactRememberMe', JSON.stringify(rememberMe));
    }, [rememberMe]);

    // Load login data when component mounts
    useEffect(() => {
        const savedLoginData = localStorage.getItem('loginFormData');
        if (savedLoginData) {
            setLoginData(JSON.parse(savedLoginData));
            
            // Pre-fill email if available from login data
            const loginRole = localStorage.getItem('loginRole');
            const loginFormData = JSON.parse(savedLoginData);
            
            if (loginRole && loginFormData[loginRole]?.email) {
                setFormData(prev => ({
                    ...prev,
                    email: loginFormData[loginRole].email
                }));
            }
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
        setSubmitError('');
    };

    const validateForm = () => {
        const newErrors = {};
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const wordCount = formData.comments.trim().split(/\s+/).length;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = 'Name must not contain numbers or special characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        if (!formData.comments.trim()) {
            newErrors.comments = 'Comments are required';
        } else if (wordCount > 200) {
            newErrors.comments = 'Comments must not exceed 200 words';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError('');
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit form');
            }

            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
            
            if (!rememberMe) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    comments: ''
                });
                localStorage.removeItem('contactFormData');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError(error.message || 'Failed to submit form. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.366634375527!2d80.13966820000002!3d12.9483754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1744018721093!5m2!1sen!2sin";

    return (
        <div className="contact-container">
            <div className="containerv">
                <h2>Contact Info</h2>

                <div className="row">
                    {/* Left Column - Contact Info */}
                    <div className="col-lg-6">
                        <div className="row">
                            {/* Postal Address Section */}
                            <div className="col-md-12 mb-4">
                                <div className="contact-box">
                                    <h3>Postal Address</h3>
                                    <p>
                                        <strong>AGNI INSTITUTE OF TECHNOLOGY</strong><br />
                                        east Leo Nagar, West Tambaram,<br />
                                        Chennai – 600 044.<br />
                                        Tamil Nadu, India.<br /><br />

                                        <i className="bi bi-telephone-fill"></i> <span>Phone:</span> 044 – 2251 2242 / 044-22512442 / 044-225122234<br />
                                        <i className="bi bi-printer-fill"></i> <span>Fax:</span> 044-2251 2242<br />
                                        <i className="bi bi-envelope-fill"></i> <span>Email:</span> 
                                        <a href="mailto:ait@ait.edu.in">ait@ait.edu.in</a><br />
                                        <i className="bi bi-file-earmark-person-fill"></i> <span>Resumes:</span> 
                                        <a href="mailto:career@ait.edu.in">career@ait.edu.in</a>
                                    </p>
                                </div>
                            </div>

                            {/* Administrative Office Section */}
                            <div className="col-md-12 mb-4">
                                <div className="admin-box">
                                    <h3>Administrative Office</h3>
                                    <p>
                                        <strong>AGNI INSTITUTE OF TECHNOLOGY</strong><br />
                                        'EAST BHAVAN', No.31, Madley Road,<br />
                                        T.Nagar, Chennai – 600 017.<br />
                                        Tamil Nadu, India.<br />
                                        Landmark: Near Madley Subway & Behind Leo Complex<br /><br />

                                        <i className="bi bi-telephone-fill"></i> <span>Phone:</span> +91 – 44 – 4226 6042 (30 lines)<br />
                                        <i className="bi bi-printer-fill"></i> <span>Fax:</span> +91 – 44 – 4226 6042<br />
                                        <i className="bi bi-envelope-fill"></i> <span>E-mail:</span> 
                                        <a href="mailto:info@ait.in">info@ait.in</a><br />
                                        <i className="bi bi-globe2"></i> <span>Website:</span> 
                                        <a href="https://www.ait.in" target="_blank" rel="noopener noreferrer">www.ait.in</a><br />
                                        <i className="bi bi-briefcase-fill"></i> <span>Placement:</span> 
                                        <a href="mailto:aitplacement@ait.edu.in">aitplacement@ait.edu.in</a>, 
                                        <a href="mailto:dean.tap@ait.edu.in">dean.ait.edu.in</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>

                    <div className="col-lg-6">
                        {/* Map section */}
                        <div className="map-container mb-5">
                            <h3>Our Location</h3>
                            <div className="map-responsive">
                                <iframe
                                    title="AGNI Institute of Technology Location"
                                    src={mapUrl}
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="form-section">
                            <h3>Get in Touch</h3>
                            {isSubmitted && (
                                <div className="alert alert-success">
                                    Thank you for your message! We'll get back to you soon.
                                </div>
                            )}
                            {submitError && (
                                <div className="alert alert-danger">
                                    {submitError}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={errors.name ? 'is-invalid' : ''}
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={errors.phone ? 'is-invalid' : ''}
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={errors.email ? 'is-invalid' : ''}
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group full-width">
                                    <label>Comments *</label>
                                    <textarea
                                        name="comments"
                                        rows="4"
                                        value={formData.comments}
                                        onChange={handleChange}
                                        className={errors.comments ? 'is-invalid' : ''}
                                    />
                                    {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}
                                </div>
                                <div className="form-group form-check remember-me">
                                    <input
                                        type="checkbox"
                                        id="contact-remember-me"
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                        className="form-check-input"
                                    />
                                    <label htmlFor="contact-remember-me" className="form-check-label">Remember me</label>
                                </div>
                                <button 
                                    type="submit" 
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;