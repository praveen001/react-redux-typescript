import { AppAction, AppActionTypes } from '../actions/appActions';

export interface IAppState {
  counter: number;
}

export const initialAppState: IAppState = {
  counter: 0
};

export default function appReducer(
  state: IAppState = initialAppState,
  action: AppAction
): IAppState {
  switch (action.type) {
    case AppActionTypes.INCREMENT:
      return {
        counter: state.counter + action.payload.x + action.payload.extra
      };

    case AppActionTypes.DECREMENT:
      return {
        counter: state.counter - action.payload.x
      };

    default:
      return state;
  }
}
