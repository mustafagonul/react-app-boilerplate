import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import AppBar from '../../containers/AppBar/AppBar';
import MenuListComposition from '../../components/MenuListComposition/MenuListComposition';
import Home from '../Home/Home';
import Info from '../Info/Info';
import About from '../About/About';


import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    const { translate, currentLanguage } = this.props;

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


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(App);

