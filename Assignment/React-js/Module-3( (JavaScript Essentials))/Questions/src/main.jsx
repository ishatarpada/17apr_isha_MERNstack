import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Question_1 from './Question_1';
import Question_2 from './Question_2';
import Question_3 from './Question_3';
import Question_4 from './Question_4';
import Question_5 from './Question_5';
import Question_6 from './Question_6';
import Question_7 from './Question_7';
import Question_8 from './Question_8';
import Question_9 from './Question_9';
import Question_10 from './Question_10';
import Question_11 from './Question_11';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Question_1 />} />
        <Route path="/question-1" element={<Question_1 />} />
        <Route path="/question-2" element={<Question_2 />} />
        <Route path="/question-3" element={<Question_3 />} />
        <Route path="/question-4" element={<Question_4 />} />
        <Route path="/question-5" element={<Question_5 />} />
        <Route path="/question-6" element={<Question_6 />} />
        <Route path="/question-7" element={<Question_7 />} />
        <Route path="/question-8" element={<Question_8 />} />
        <Route path="/question-9" element={<Question_9 />} />
        <Route path="/question-10" element={<Question_10 />} />
        <Route path="/question-11" element={<Question_11 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
