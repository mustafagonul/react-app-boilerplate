import { combineReducers } from 'redux';
import { localizeReducer } from 'react-localize-redux';

import settings from './settings';


const rootReducer = combineReducers({
  localize: localizeReducer,
  settings,
});


export default rootReducer;
