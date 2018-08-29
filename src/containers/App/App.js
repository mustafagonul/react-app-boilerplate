import React, { Component } from 'react';
import { BrowserRouter as Router,  Route} from 'react-router-dom';


import AppBar from '../../containers/AppBar/AppBar';
import Home from '../Home/Home';
import Info from '../Info/Info';
import About from '../About/About';


import './App.css';


class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <AppBar />
          <Route exact path="/" component={Home}/>
          <Route path="/info" component={Info}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}


export default App;

