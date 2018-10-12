import { connect } from 'react-redux';

import { IState } from '../reducers';
import { increment, decrement } from '../actions/appActions';
import App, { IOwnProps, IStateProps, IDispatchProps } from '../components/App';

function mapStateToProps(state: IState, props: IOwnProps): IStateProps {
  return {
    counter: state.app.counter,
  };
}

const mapDispatchToProps: IDispatchProps = {
  increment,
  decrement
};

export default connect<IStateProps, IDispatchProps, IOwnProps>(mapStateToProps, mapDispatchToProps)(App);