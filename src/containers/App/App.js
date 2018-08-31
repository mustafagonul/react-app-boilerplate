import React, { Component } from 'react';
import { BrowserRouter as Router,  Route} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import AppBar from '../../containers/AppBar/AppBar';
import Home from '../Home/Home';
import Info from '../Info/Info';
import About from '../About/About';


import './App.css';


const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <AppBar />
          <Route exact path="/" component={Home}/>
          <Route path="/info" component={Info}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}


export default App;

