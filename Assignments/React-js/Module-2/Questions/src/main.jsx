import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Question_1 from './Question_1';
import Question_2 from './Question_2';
import Question_3 from './Question_3';
import Question_4 from './Question_4';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Question_1 />} />
        <Route path="/question-1" element={<Question_1 />} />
        <Route path="/question-2" element={<Question_2 />} />
        <Route path="/question-3" element={<Question_3 />} />
        <Route path="/question-4" element={<Question_4 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
