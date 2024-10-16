import React, { useState } from 'react';
import axios from 'axios';

const AdminProblemForm = () => {
  const [problem, setProblem] = useState({
      title: '',
      description: '',
      difficulty: '',
      acceptance_rate: '',
      examples: '',
      sample_code: ''
  });

  const handleChange = (e) => {
      setProblem({ ...problem, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const examplesArray = JSON.parse(problem.examples); // Parse JSON for examples
        await axios.post('/api/admin/problems', {
            title: problem.title,
            description: problem.description,
            difficulty: problem.difficulty,
            acceptance_rate: problem.acceptance_rate,
            examples: examplesArray,
            sample_code: problem.sample_code
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        alert('Problem added successfully!');
    } catch (error) {
        console.error('Error adding problem:', error);
    }
};


  return (
      <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} required />
          <select name="difficulty" onChange={handleChange} required>
              <option value="" disabled>Select difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
          </select>
          <input name="acceptance_rate" placeholder="Acceptance Rate" onChange={handleChange} required />
          <textarea name="examples" placeholder='Examples as JSON (e.g. [{"input": [2,7], "output": [0,1]}])' onChange={handleChange} required />
          <textarea name="sample_code" placeholder="Sample Code" onChange={handleChange} required />
          <button type="submit">Add Problem</button>
      </form>
  );
};


export default AdminProblemForm;
