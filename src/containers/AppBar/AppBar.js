import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,  Route,  Link } from 'react-router-dom';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { withStyles } from 'material-ui/styles';
import MuiAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import LanguageSelect from '../LanguageSelect/LanguageSelect';
import AppBarButton from '../../components/AppBarButton/AppBarButton';


class AppBar extends Component {

	render() {
    const { translate, currentLanguage } = this.props;

    return (
			<div>
				<MuiAppBar position="static">
					<Toolbar>
						<AppBarButton text='Home' link='/' />
						<AppBarButton text='Info' link='/info' />
						<AppBarButton text='About' link='/about' />
						<LanguageSelect />
					</Toolbar>
				</MuiAppBar>	
			</div>
    );
	}
}


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(AppBar);

