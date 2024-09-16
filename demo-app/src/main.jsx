import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import ContactUs from './Components/ContactUs.jsx';
import Page from './Components/Page.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<Page />} />
      </Routes>
    </Router>
  </StrictMode>
);
