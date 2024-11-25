// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/Contact.css'; // Your CSS file for styling

const Contact = () => {
  const [status, setStatus] = useState('Submit');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    const { name, email, message,website } = e.target.elements;

    try {
      await emailjs.send('service_ei8hfjb', 'template_wjvvnma', {
        to_name: name.value,
        from_name: email.value,
        message: message.value,
        website: website.value,
      }, 'w_VZPsWG1WaMy4xLm'); // Replace "your_public_key" with your actual public key

      setStatus('Submit');
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Submit');
      alert('Failed to send email.');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="header1">Contact Us</h1>
      <div className="contact-form">
        <h2>Ask Query</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <label htmlFor="website">Company Website:</label>
          <input type="text" id="website" name="website" />

          <button type="submit">{status}</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="address-info">
          <h2>Our Office</h2>
          <p>123 Main Street</p>
          <p>Cityville, State 12345</p>
          <p>Country</p>
        </div>

        <div className="phone-info">
          <h2>Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Website: www.example.com</p>
        </div>
      </div>

      <div className="map-container">
        {/* Embed Google Maps iframe with your location */}
        <iframe
          title="Company Location"
          width="100%"
          height="300"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-74.00597379380642!3d40.71277576632479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzEyLjAiTiA3NMKwMzgnNTAuOSJX!5e0!3m2!1sen!2sus!4v1642855104172!5m2!1sen!2sus"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
