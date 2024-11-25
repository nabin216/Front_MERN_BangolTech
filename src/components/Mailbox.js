// Mailbox.js

import React, { useState } from 'react';
import './css/Mailbox.css'; // Make sure to include your CSS file

const Mailbox = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the email submission, e.g., send an email or save to a database
    console.log('Email submitted:', email);
    // You can also reset the email field after submission if needed
    setEmail('');
  };

  return (
    <div>
      <h2>Get In Touch With Us</h2>
      <form onSubmit={handleSubmit} className="mailbox-form">
        <div className="email-input">
          <input
            placeholder='your gemail.com'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Mailbox;
