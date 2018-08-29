import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
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

render(
  <Provider store={store}>  
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
