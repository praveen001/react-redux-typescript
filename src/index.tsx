import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Action, createStore } from 'redux';

import rootReducer, { initialState, IState } from './reducers';

import AppContainer from './containers/AppContainer';

const store = createStore<IState, Action, {}, {}>(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer title="Increment/Decrement" />
  </Provider>,
  document.getElementById('app')
);
