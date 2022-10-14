import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// tem-se criar um elemento pai caso queira colocar outro elemento
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Outro Titulo</h1>
    <App />
  </div>
);