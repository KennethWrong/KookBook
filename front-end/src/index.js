import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './DashBoard';
import Nav from './Nav';

ReactDOM.render(
  <React.StrictMode>
    <DashBoard />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById('nav')
);