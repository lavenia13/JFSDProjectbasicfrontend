import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions or just want to get in touch, feel free to reach out.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your Message" required></textarea>
        </div>

        <button className="submit-button" type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Our Location</h2>
        <p>123 Handloom Street, Artisan City, Indonesia</p>
        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p>Email: <a href="mailto:Heirava@gmail.com">Heirava@gmail.com</a></p>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094376!2d144.95565131531673!3d-37.81621797975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f3b3%3A0x0!2zTUVMQk9VUl5FIFdFTlRPUkFUINeEq2dkdeaqrw!5e0!3m2!1sen!2sin!4v1585059306581!5m2!1sen!2sin"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>

      {showPopup && (
        <div className="popup-message show">
          Details sent successfully!
        </div>
      )}
    </div>
  );
}

export default ContactUs;
