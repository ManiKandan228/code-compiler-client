import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPageComponent/LandingPage';
import Login from './components/AuthenticateComponent/LoginComponent/LoginComponent';
import Signup from './components/AuthenticateComponent/SignupComponent/SignupComponent';
import ProblemListPage from './components/ProblemComponent/ProblemListPage/ProblemsListPage';
import ProfileComponent from './components/UserComponents/ProfileComponent/ProfileComponent'; 
import ProblemPage from "./components/ProblemComponent/ProblemPage/problemPage";
import AdminProblemForm from './components/AdminComponents/AdminProblemForm';
import ProblemManagement from './components/AdminComponents/ProblemManagement';
import UserSubmissions from './components/AdminComponents/UserSubmission';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProfileComponent />} />
        <Route path="/problems" element={<ProblemListPage />} />
        <Route path="/:id" element={<ProblemPage />} />
        <Route path="/admin/add-problem" element={<AdminProblemForm/>} />
        <Route path="/admin/manage-problems" element={<ProblemManagement/>} />
        <Route path="/admin/user-submissions" element={<UserSubmissions/>} />
      </Routes>
    </Router>
  );
}

export default App;
