import { combineReducers } from 'redux';

import appReducer, { IAppState, initialAppState } from './appReducer';

export interface IState {
  app: IAppState
};

export const initialState: IState = {
  app: initialAppState,
};

export default combineReducers<IState>({
  app: appReducer,
});