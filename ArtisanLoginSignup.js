import React, { useState } from 'react';
import './ArtisanLoginSignup.css';

function ArtisanLoginSignup() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const [storedData, setStoredData] = useState(null); // Stores signup details for validation in login
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Handle form field changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Form validation for Signup
  const validateSignupForm = () => {
    const { phone, password } = formData;

    if (phone.length !== 10 || isNaN(phone)) {
      setPopupMessage("Please enter a valid 10-digit phone number.");
      setShowPopup(true);
      return false;
    }

    if (password.length < 6) {
      setPopupMessage("Password should be at least 6 characters.");
      setShowPopup(true);
      return false;
    }

    return true;
  };

  // Handle form submission for Signup and Login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login validation
      if (
        storedData &&
        formData.email === storedData.email &&
        formData.password === storedData.password
      ) {
        setPopupMessage("Login successful!");
        setShowPopup(true);
      } else {
        setPopupMessage("Invalid credentials. Please try again.");
        setShowPopup(true);
      }
    } else {
      // Signup validation and submission
      if (validateSignupForm()) {
        setStoredData(formData);
        setPopupMessage("Signup successful!");
        setShowPopup(true);
        setFormData({ name: '', email: '', phone: '', password: '' }); // Reset form fields
      }
    }

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="artisan-auth">
      <h1>{isLogin ? 'Artisan Login' : 'Artisan Signup'}</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="10-digit Phone Number"
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Your Password"
            required
          />
        </div>

        <button className="submit-button" type="submit">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} className="toggle-form">
        {isLogin ? 'New user? Signup here' : 'Already have an account? Login here'}
      </p>

      {showPopup && (
        <div className="popup-message show">
          {popupMessage}
        </div>
      )}
    </div>
  );
}

export default ArtisanLoginSignup;
