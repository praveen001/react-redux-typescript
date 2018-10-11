export enum AppActionTypes {
  INCREMENT = 'app/INCREMENT',
  DECREMENT = 'app/DECREMENT'
};

export interface IIncrementAction {
  type: AppActionTypes.INCREMENT,
  payload: {
    number: number,
    extra: number
  }
};

export interface IDecrementAction {
  type: AppActionTypes.DECREMENT,
  payload: {
    number: number
  }
};

export type AppAction = IIncrementAction | IDecrementAction;

export const types = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

export function increment(number: number): IIncrementAction {
  return {
    type: AppActionTypes.INCREMENT,
    payload: {
      number,
      extra: 10
    }
  };
};

export function decrement(number: number): IDecrementAction {
  return {
    type: AppActionTypes.DECREMENT,
    payload: {
      number
    }
  };
};