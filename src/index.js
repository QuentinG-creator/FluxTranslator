import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';

const header = ReactDOM.createRoot(document.getElementById('root'));
header.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
