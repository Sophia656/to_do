import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
