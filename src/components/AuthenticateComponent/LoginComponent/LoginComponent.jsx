import React, { useState } from 'react';
import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../../src/firebase/firebase'; 
import { useNavigate } from 'react-router-dom';
import './LoginComponent.css';

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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const response = await axios.post('https://compilex-client.vercel.app/api/users/login', { email, password });
      console.log('User logged in:', response.data);
      
      localStorage.setItem('token', response.data.token);
      navigate('/problems'); 
    } catch (error) {
      console.error('Error logging in:', error);
      setError(error.response?.data?.message || 'An error occurred during login');
    }
  };

  return (
    <div className="login-body"> 
      <div className="login-container">
        <div className="login-inner-container">
          <h2 className="login-form-title">Login</h2>
          {error && <p className="login-message error">{error}</p>} 
          <form onSubmit={handleLogin}>
            <input
              className="login-input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="login-button" type="submit">Login</button>
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
    </div>
  );
};

export default LoginComponent;
