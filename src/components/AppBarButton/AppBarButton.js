import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


class AppBarButton extends Component {

	render() {
    const { text, link } = this.props;
    const { translate, currentLanguage } = this.props;

		const onLink = props => <Link to={ link } {...props} />

    return (
			<div>
				<Button component={ onLink }><Typography variant="subheading">{ translate(text) }</Typography></Button>
			</div>
    );
	}
}


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(AppBarButton);

