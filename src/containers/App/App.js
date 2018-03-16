import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import MenuListComposition from '../../components/MenuListComposition/MenuListComposition';
import LanguageButton from '../../components/LanguageButton/LanguageButton';
import Home from '../Home/Home';
import Info from '../Info/Info';
import About from '../About/About';
import { requestSelectEnglish, requestSelectTurkish } from '../../actions/language';


import logo from './logo.svg';
import './App.css';


class App extends Component {
  selectEnglish = () => {
    this.props.dispatch(requestSelectEnglish());
  }
  selectTurkish = () => {
    this.props.dispatch(requestSelectTurkish());
  }

  render() {
    const { translate, currentLanguage } = this.props;

    return (
      <Router>
        <div>
          <LanguageButton code="GB" text='ENGLISH' onClick={ this.selectEnglish } />
          <LanguageButton code="TR" text='TURKISH' onClick={ this.selectTurkish } />

          <MenuListComposition />


          <hr/>

          <ul>
            <li><Link to="/">{ translate('Home') }</Link></li>
            <li><Link to="/info">{ translate('Info') }</Link></li>
            <li><Link to="/about">{ translate('About') }</Link></li>
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

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});

export default connect(mapStateToProps)(App);

