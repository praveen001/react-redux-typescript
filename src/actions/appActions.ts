import { Action } from 'redux';

export enum AppActionTypes {
  INCREMENT = 'app/INCREMENT',
  DECREMENT = 'app/DECREMENT'
}

export interface IIncrementAction extends Action {
  type: AppActionTypes.INCREMENT;
  payload: {
    x: number;
    extra: number;
  };
}

export interface IDecrementAction extends Action {
  type: AppActionTypes.DECREMENT;
  payload: {
    x: number;
  };
}

export type AppAction = IIncrementAction | IDecrementAction;

export function increment(x: number, extra: number): IIncrementAction {
  return {
    type: AppActionTypes.INCREMENT,
    payload: {
      x,
      extra: 10
    }
  };
}

export function decrement(x: number): IDecrementAction {
  return {
    type: AppActionTypes.DECREMENT,
    payload: {
      x
    }
  };
}
