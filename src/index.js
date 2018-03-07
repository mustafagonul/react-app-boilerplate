import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

import configureStore from './store/configureStore';
import App from './containers/App/App';

import 'normalize.css';
import './style.css';

const language = localStorage.getItem('language');

const store = configureStore({
	settings: fromJS({
		language
	})
}); 

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

