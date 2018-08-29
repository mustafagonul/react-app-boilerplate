import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import Button from '@material-ui/core/Button';
import ReactCountryFlag from 'react-country-flag';
import Typography from '@material-ui/core/Typography';


class LanguageButton extends Component {

  render() {
    const { code, text, onClick, /*translate, currentLanguage*/ } = this.props;

    return (
      <div style={{ display: "flex", flexFlow: "row wrap"}}>
        <Button onClick={ onClick }>
          <ReactCountryFlag code={ code } flagProps={{ fontSize: "1.5rem" }} svg />
          <Typography style={{ "margin-left": "10px", "margin-top": "5px" }} variant="subheading">
            { text }
          </Typography>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
//  translate: getTranslate(state.locale),
//  currentLanguage: getActiveLanguage(state.locale).code
});

export default connect(mapStateToProps)(LanguageButton);

