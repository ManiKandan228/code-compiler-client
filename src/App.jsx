import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/SharedComponent/LandingPageComponent/LandingPage';
import Login from './components/AuthenticateComponent/LoginComponent/LoginComponent';
import Signup from './components/AuthenticateComponent/SignupComponent/SignupComponent';
import Dashboard from './components/AdminComponents/DashboardComponent/Dashboard';
import CodeEditor from './components/UserComponents/CodeEditorComponent/CodeEditor';
import UserManagement from './components/AdminComponents/UserManagementComponent/UserManagement';
import ProfileComponent from './components/UserComponents/ProfileComponent/ProfileComponent'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
