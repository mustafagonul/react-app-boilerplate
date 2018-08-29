import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';

import LanguageButton from '../../components/LanguageButton/LanguageButton';
//import { requestSelectEnglish, requestSelectTurkish } from '../../actions/language';


const LanguageSelect = ({ languages, setActiveLanguage }) => (    
  <div style={{ display: "flex" }}>
    { languages.map(lang => (
      <LanguageButton code={lang.code} text={lang.name} onClick={ () => setActiveLanguage(lang.code)} />
    ))}
  </div>
);
  

export default withLocalize(LanguageSelect);

