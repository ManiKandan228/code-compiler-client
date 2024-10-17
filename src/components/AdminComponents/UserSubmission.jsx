import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    const response = await axios.get('https://compilex-client.vercel.app/api/submissions', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setSubmissions(response.data);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div>
      <h2>User Submissions</h2>
      {submissions.map(submission => (
        <div key={submission._id}>
          <h3>{submission.code}</h3>
          <p>Result: {submission.result}</p>
        </div>
      ))}
    </div>
  );
};

export default UserSubmissions;
