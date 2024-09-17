/* Routing :- it is technique to used in react application to manage to navigation between different component or pages.

BrowserRouter :-  component from the react-router-dom library.
                  used to wrap your entire application.

Routes :- It is a container component that houses all your Route components.
          responsible for matching the current URL with the defined routes and rendering the correct component.

Route :- path which specifies the URL path and an element which specifies the React component to render when the path matches the current URL. */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


exmaple :-
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
