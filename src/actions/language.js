import { setActiveLanguage } from 'react-localize-redux';


export function requestSelectEnglish() {
  return dispatch => {
		dispatch(setActiveLanguage('en'));
  }
}


export function requestSelectTurkish() {
  return dispatch => {
		dispatch(setActiveLanguage('tr'));
  }
}

