import React, { Component } from 'react';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';
import Home from '../Home/Home';
import Info from '../Info/Info';
import About from '../About/About';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/info">Info</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/info" component={Info}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
