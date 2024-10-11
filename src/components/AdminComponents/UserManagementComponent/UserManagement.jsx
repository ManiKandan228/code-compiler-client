import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import './UserManagement.css';
import axios from 'axios';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/users');
    setUsers(response.data);
  };

  const handleUserAdded = () => {
    fetchUsers(); // Refresh user list
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <UserForm onUserAdded={handleUserAdded} />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
