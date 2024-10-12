import React, { useState } from 'react';
import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../../src/firebase/firebase'; 
import { useNavigate } from 'react-router-dom';
import './LoginComponent.css'; // Ensure this path is correct

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Authenticate user with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Optional
      const response = await axios.post('/api/users/login', { email, password });
      console.log('User logged in:', response.data);
      
      // Store the token in localStorage 
      localStorage.setItem('token', response.data.token);
      navigate('/profile'); // Redirect to user profile
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <div className="login-inner-container"> {/* Wrapper for login content */}
        <h2 className="login-form-title">Login</h2> {/* Updated class name */}
        {error && <p className="login-error-message">{error}</p>} {/* Updated class name */}
        <form onSubmit={handleLogin}>
          <input
            className="login-input" /* Updated class name */
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input" /* Updated class name */
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-button" type="submit">Login</button> {/* Updated class name */}
        </form>
        <div className="login-recover">
          <a href="/recover-password">Forgot Password?</a>
        </div>
        <div className="login-links">
          <button id="signUpButton" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
