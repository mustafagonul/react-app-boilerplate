import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';

import LanguageButton from '../../components/LanguageButton/LanguageButton';
import { requestSelectEnglish, requestSelectTurkish } from '../../actions/language';


class LanguageSelect extends Component {
  selectEnglish = () => {
    this.props.dispatch(requestSelectEnglish());
  }
  selectTurkish = () => {
    this.props.dispatch(requestSelectTurkish());
  }

  render() {
    const { translate, currentLanguage } = this.props;

    return (
      <div style={{ display: "flex" }}>
				<LanguageButton code="GB" text='ENGLISH' onClick={ this.selectEnglish } />
        <LanguageButton code="TR" text='TURKISH' onClick={ this.selectTurkish } />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(LanguageSelect);

