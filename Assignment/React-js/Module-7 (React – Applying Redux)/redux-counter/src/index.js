import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './Reducer/Reducer';

// Create the Redux store
const store = createStore(counterReducer);

// Get the root element
const rootElement = document.getElementById('root');

// Create the root using React 18's createRoot API
const root = ReactDOM.createRoot(rootElement);

// Render the App wrapped in the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
