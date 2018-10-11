import { connect } from 'react-redux';

import { IState } from '../reducers';
import { increment, decrement } from '../actions/appActions';
import App, { PropsFromState, PropsFromDispatch } from '../components/App';

function mapStateToProps(state: IState): PropsFromState {
  return {
    counter: state.app.counter,
  };
}

const mapDispatchToProps: PropsFromDispatch = {
  increment,
  decrement
};

export default connect<PropsFromState, PropsFromDispatch>(mapStateToProps, mapDispatchToProps)(App);