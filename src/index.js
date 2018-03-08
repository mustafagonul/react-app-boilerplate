import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { initialize, addTranslation } from 'react-localize-redux';
import { fromJS } from 'immutable';

import configureStore from './store/configureStore';
import App from './containers/App/App';

import 'normalize.css';
import './style.css';


const foo = localStorage.getItem('foo');

const store = configureStore({
	settings: fromJS({
		foo
	})
});

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Turkish', code: 'tr' },
];
const json = require('./global.locale.json');

store.dispatch(initialize(languages, { defaultLanguage: 'en' }));
store.dispatch(addTranslation(json));

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

