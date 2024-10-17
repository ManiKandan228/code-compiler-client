import React, { useState } from 'react';
import axios from 'axios';

const EditProfileComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const updateUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('https://compilex-client.vercel.app/api/users/profile', 
      { username, password }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Failed to update profile');
    }
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={updateUserProfile}>Update Profile</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EditProfileComponent;
