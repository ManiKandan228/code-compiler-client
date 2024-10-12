import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing">
      <h1>Welcome to Online Code Compiler</h1>
      <div>
        <Link to="/signup">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
