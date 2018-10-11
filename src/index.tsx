import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer, { IState, initialState } from './reducers';
import Action from './actions';

import AppContainer from './containers/AppContainer';

const store = createStore<IState, Action, {}, {}>(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);