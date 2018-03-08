import { createReducer } from '../helpers/redux';
import { fromJS } from 'immutable';


const initialState = fromJS({
  loading: false,
  foo: 'foo',
  error: null
});


export default createReducer(initialState, {
  FOO_START: state => state.set('loading', true),

  FOO_COMPLETE: (state, { data: { foo } }) => state.merge(fromJS({
    loading: false,
    foo
  })),

  FOO_ERROR: (state, { error }) => state.merge({
    loading: false,
    error,
  }),

  CLEAR_ERROR_STATE: (state, { error }) => state.set('error', false),

  CLEAR_SETTINGS: () => initialState,
});

