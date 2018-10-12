import { connect } from 'react-redux';

import { decrement, increment } from '../actions/appActions';
import App, { IDispatchProps, IOwnProps, IStateProps } from '../components/App';
import { IState } from '../reducers';

function mapStateToProps(state: IState, props: IOwnProps): IStateProps {
  return {
    counter: state.app.counter
  };
}

const mapDispatchToProps: IDispatchProps = {
  increment,
  decrement
};

export default connect<IStateProps, IDispatchProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(App);
