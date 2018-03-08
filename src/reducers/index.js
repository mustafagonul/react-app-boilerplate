import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';

import settings from './settings';

const rootReducer = combineReducers({
  locale,
  settings,
});

export default rootReducer;

