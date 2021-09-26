import React from 'react';
import ReactDOM from 'react-dom';
import DashBoard from './DashBoard';
import Nav from './Nav';
import {BrowserRouter as Router} from "react-router-dom"
import './styles/index.css'


ReactDOM.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
  document.getElementById('nav')
);

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <DashBoard />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
