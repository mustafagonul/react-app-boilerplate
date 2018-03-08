import { createAction } from '../helpers/redux';

export const fooStart = createAction('FOO_START');
export const fooComplete = createAction('FOO_COMPLETE', 'data');


export function fooRequest({ foo }) {
  return dispatch => {
    dispatch(fooStart());

    localStorage.setItem('foo', foo);

    dispatch(fooComplete({
			foo
    }));
  }
}

