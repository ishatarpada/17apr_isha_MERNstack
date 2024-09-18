import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "font-awesome/css/font-awesome.min.css";
import './index.css';
import Home from './Home.jsx';
import Count from './Count.jsx';
import Alpha from './Alpha.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/alpha" element={<Alpha />} />
        <Route path="/count" element={<Count />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
