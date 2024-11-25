import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });

      // Check if the login was successful
      if (response.status === 200) {
        const loginTime = new Date().getTime();
        localStorage.setItem('user', JSON.stringify({
          id: response.data.user.id,
          username: response.data.user.username,
          loginTime,
        }));

        // Redirect to Dashboard.js upon successful login
        navigate('/Dashboard');
      } else {
        // Handle login failure (display error message, etc.)
        console.error('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login Form</h1>
        {/* Your login form fields */}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        {/* Submit button */}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
