import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/admin/user-management">Manage Users</Link></li>
        <li><Link to="/admin/view-submissions">View User Submissions</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
