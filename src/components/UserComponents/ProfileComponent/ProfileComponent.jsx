import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './ProfileComponent.css'; 

const ProfileComponent = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Failed to fetch user profile');
      }
    };

    fetchUserProfile();
  }, []);

  const navigateToCodeEditor = () => {
    navigate('/code-editor'); 
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {error && <p className="error-message">{error}</p>}
      {user ? (
        <div className="profile-info">
          <p className="username">{user.username}</p>
          <button onClick={navigateToCodeEditor}>Start Coding</button> 
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileComponent;
