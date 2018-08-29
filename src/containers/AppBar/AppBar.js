import React, { Component } from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

//import LanguageSelect from '../LanguageSelect/LanguageSelect';
import AppBarButton from '../../components/AppBarButton/AppBarButton';


class AppBar extends Component {

  render() {
    return (
      <div>
        <MuiAppBar position="static">
          <Toolbar>
            <AppBarButton text='Home' link='/' />
            <AppBarButton text='Info' link='/info' />
            <AppBarButton text='About' link='/about' />
          </Toolbar>
        </MuiAppBar>  
      </div>
    );
  }
}

export default AppBar;

