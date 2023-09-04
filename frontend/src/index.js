import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Imgbg from './Images/lib.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='bg-warning'>
    <App />
  </div>
);
