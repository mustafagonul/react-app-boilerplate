import { createReducer } from '../helpers/redux';
import { fromJS } from 'immutable';


const initialState = fromJS({
  loading: false,
  language: 'en',
  error: null
});


export default createReducer(initialState, {
  SELECT_LANGUAGE_START: state => state.set('loading', true),

  SELECT_LANGUAGE_COMPLETE: (state, { data: { language } }) => state.merge(fromJS({
    loading: false,
    language
  })),

  SELECT_LANGUAGE_ERROR: (state, { error }) => state.merge({
    loading: false,
    error,
  }),

  CLEAR_ERROR_STATE: (state, { error }) => state.set('error', false),

  CLEAR_SETTINGS: () => initialState,
});

