import React from 'react';
import { connect } from 'react-redux';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';


const Home = ({translate, currentLanguage}) => (
  <div>
    <h2>{ translate('Home') }</h2>
  </div>
)


const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  currentLanguage: getActiveLanguage(state.locale).code
});


export default connect(mapStateToProps)(Home);

