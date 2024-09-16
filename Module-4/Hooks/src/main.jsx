import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Increment from './Increment.jsx';
import Update from './Update.jsx';
import Counter from './Counter.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

// Example of initializing counter state
function Root() {
  const [counter, setCounter] = useState(0);

  return (
    <React.StrictMode>
      <App />
      <Increment />
      <Update />
      <Counter />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
