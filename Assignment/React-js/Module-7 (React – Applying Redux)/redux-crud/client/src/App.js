import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/create" element={<PostForm />} />
      <Route path="/edit/:id" element={<PostForm />} />
    </Routes>
  </Router>
);

export default App;
