import React, { useState } from 'react';
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../../../../src/firebase/firebase';
import './SignupComponent.css'
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

      // Send to the backend for registration
      const response = await axios.post('http://localhost:5173/api/users/register', {
        username,
        email,
        password,
      });

      setSuccess('User registered successfully!');
      console.log('User registered:', response.data);
    } catch (err) {
      console.error('Error registering user:', err);
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred during registration.');
      }
    }
  };

  return (
    <div className="container" id="signup">
      <h1 className="form-title">Register</h1>
      <form onSubmit={registerUser}>
        {error && <div className="messageDiv">{error}</div>}
        {success && <div className="messageDiv">{success}</div>}
        
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username">Username</label>
        </div>

        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-group">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <button className="btn" id="submitSignUp">Sign Up</button>
      </form>
      <p className="or">----------or--------</p>
      <div className="icons">
        <i className="fab fa-google"></i>
        <i className="fab fa-facebook"></i>
      </div>
      <div className="links">
        <p>Already Have an Account?</p>
        <button id="signInButton" onClick={() => navigate('/login')}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignupComponent;
