import React, { useState } from 'react';
import axios from 'axios';
import Output from '../OutputComponent/Output';
import './CodeEditor.css';

const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript'); 
    const [output, setOutput] = useState('');
    const [loading, setLoading] = useState(false);

    const languages = [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'cpp', label: 'C++' },
        { value: 'c', label: 'C' },
    ];

    const handleRunCode = async () => {
        setLoading(true);
        try {
          const response = await axios.post('http://localhost:5000/api/code/submit', {
            language,
                code,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`, 
                },
            });

            setOutput(response.data.result);
        } catch (error) {
            setOutput('Error occurred while executing the code.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="code-editor">

            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                        {lang.label}
                    </option>
                ))}
            </select>

            <textarea 
                rows="10" 
                cols="50" 
                placeholder="Write your code here..." 
                value={code} 
                onChange={(e) => setCode(e.target.value)} 
            />

            <button onClick={handleRunCode} disabled={loading}>
                {loading ? 'Running...' : 'Run Code'}
            </button>

            <Output output={output} />
        </div>
    );
};

export default CodeEditor;