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


class AppBar extends Component {


 
	render() {
    const { translate, currentLanguage } = this.props;

		const onHome = props => <Link to='/' {...props} />
		const onInfo = props => <Link to='/info' {...props} />
		const onAbout = props => <Link to='/about' {...props} />

    return (
			<div>
				<MuiAppBar position="static">
					<Toolbar>
						<Button component={ onHome }><Typography variant="subheading">{ translate('Home') }</Typography></Button>
						<Button component={ onInfo }><Typography variant="subheading">{ translate('Info') }</Typography></Button>
						<Button component={ onAbout }><Typography variant="subheading">{ translate('About') }</Typography></Button>
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

