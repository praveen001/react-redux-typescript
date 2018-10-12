import { Action } from 'redux';

export enum AppActionTypes {
  INCREMENT = 'app/INCREMENT',
  DECREMENT = 'app/DECREMENT'
}

export interface IIncrementAction extends Action {
  type: AppActionTypes.INCREMENT;
  payload: {
    number: number;
    extra: number;
  };
}

export interface IDecrementAction extends Action {
  type: AppActionTypes.DECREMENT;
  payload: {
    number: number;
  };
}

export type AppAction = IIncrementAction | IDecrementAction;

export function increment(number: number, extra: number): IIncrementAction {
  return {
    type: AppActionTypes.INCREMENT,
    payload: {
      number,
      extra: 10
    }
  };
}

export function decrement(number: number): IDecrementAction {
  return {
    type: AppActionTypes.DECREMENT,
    payload: {
      number
    }
  };
}
