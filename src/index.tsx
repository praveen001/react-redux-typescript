import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Action } from 'redux';

import rootReducer, { IState, initialState } from './reducers';

import AppContainer from './containers/AppContainer';

const store = createStore<IState, Action, {}, {}>(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer title="Increment/Decrement" />
  </Provider>,
  document.getElementById('app')
);
