import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './firebase';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
