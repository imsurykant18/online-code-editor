import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState('// Write your code here');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleRun = async () => {
    setIsLoading(true);
    setOutput('Running...');
    try {
      const response = await axios.post('http://localhost:8000/run', {
        language,
        code,
        stdin: input,
      });

      if (response.data.stderr) {
        setOutput(response.data.stderr);
      } else {
        setOutput(response.data.stdout || 'Code executed successfully with no output.');
      }
    } catch (error) {
      setOutput('Network Error: Could not connect to the server. Is it running?');
    }
    setIsLoading(false);
  };

  return (
    <div className={`app-container ${theme}`}>
      <div className="controls-container">
        <div className="controls-left">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
          </select>
          <button className="run-button" onClick={handleRun} disabled={isLoading}>
            {isLoading ? 'Running...' : 'Run'}
          </button>
        </div>
        <div className="controls-right">
          {/* --- THIS IS THE CHANGE --- */}
          <button className="theme-button" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌑'}
          </button>
        </div>
      </div>

      <div className="main-container">
        <div className="editor-pane">
          <Editor
            height="100%"
            language={language}
            theme={theme === 'dark' ? 'vs-dark' : 'light'}
            value={code}
            onChange={(value) => setCode(value)}
            loading={<div className="editor-loading">Loading Editor...</div>}
          />
        </div>
        <div className="io-pane">
          <div className="input-box">
            <h3>Input:</h3>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your input here..."
            />
          </div>
          <div className="output-box">
            <h3>Output:</h3>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
