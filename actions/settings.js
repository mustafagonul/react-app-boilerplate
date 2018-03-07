import { createAction } from '../helpers/redux';

export const selectLanguageStart = createAction('SELECT_LANGUAGE_START');
export const selectLanguageComplete = createAction('SELECT_LANGUAGE_COMPLETE', 'data');


export function selectLanguageRequest({ language }) {
  return dispatch => {
    dispatch(selectLanguageStart());

    localStorage.setItem('language', language);

    dispatch(selectLanguageComplete({
			language
    }));
  }
}

