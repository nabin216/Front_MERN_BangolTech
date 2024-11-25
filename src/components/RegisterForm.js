// projectalfa/myapp/public/components/RegisterForm.js

import axios from 'axios';
import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        username,
        email,
        password,
      });

      // Handle success (e.g., show a success message)
      console.log(response.data.message);
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-form-container">
      <h1 className="register-form-header">Register Form</h1>
      {/* Your registration form fields */}
      <input
        className="register-form-field"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="register-form-field"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="register-form-field"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {/* Submit button */}
      <button className="register-form-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
}

export default RegisterForm;
