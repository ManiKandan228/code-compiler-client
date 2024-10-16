import React, { useState } from 'react';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../../../../src/firebase/firebase';
import './SignupComponent.css';

const auth = getAuth(app);

const SignupComponent = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Firebase authentication
      await createUserWithEmailAndPassword(auth, email, password);

      // Send to backend for registration
      const response = await axios.post('http://localhost:5173/api/users/register', {
        username,
        email,
        password,
      });

      setSuccess('Registered successfully! Redirecting to login...');
      console.log('User registered:', response.data);

      // Navigate to /login after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      console.error('Error registering user:', err);
      if (err.response && err.response.data.message) {
        setError(err.response.data.message); 
      } else if (err.code === 'auth/email-already-in-use') {
        setError('Email is already registered.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signup-body">
      <div className="signup-container">
        <h1 className="signup-title">Register</h1>
        <form className="signup-form" onSubmit={registerUser}>
          {error && <div className="signup-message error">{error}</div>}
          {success && <div className="signup-message success">{success}</div>}

          <div className="signup-input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              className="signup-input"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username" className="signup-label">Username</label>
          </div>

          <div className="signup-input-group">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              className="signup-input"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" className="signup-label">Email</label>
          </div>

          <div className="signup-input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              className="signup-input"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password" className="signup-label">Password</label>
          </div>

          <button className="signup-btn" id="submitSignUp">Sign Up</button>
        </form>

        <p className="signup-or">----------or--------</p>
        <div className="signup-icons">
          <i className="fab fa-google"></i>
          <i className="fab fa-facebook"></i>
        </div>

        <div className="signup-links">
          <p>Already Have an Account?</p>
          <button id="signInButton" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
