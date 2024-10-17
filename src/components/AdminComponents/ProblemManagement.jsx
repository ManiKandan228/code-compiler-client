import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProblemManagement = () => {
  const [problems, setProblems] = useState([]);

  const fetchProblems = async () => {
    const response = await axios.get('https://compilex-client.vercel.app/admin/problems', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setProblems(response.data);
  };

  const deleteProblem = async (id) => {
    await axios.delete(`https://compilex-client.vercel.app/admin/problems/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchProblems();
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  return (
    <div>
      <h2>Manage Problems</h2>
      {problems.map(problem => (
        <div key={problem._id}>
          <h3>{problem.title}</h3>
          <button onClick={() => deleteProblem(problem._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProblemManagement;
