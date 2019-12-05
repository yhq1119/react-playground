import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from '../../logo.svg';
import Landing from '../landing/Landing';
import Nav from '../navbar/NavBar';
import Items from '../items-page/Items';
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  <Switch>

  <Route to={'/'} exact component={Landing} />
  <Route to={'/items'} component={Items} />


  </Switch>
  </Router>
    </div>
  );
}

export default App;
