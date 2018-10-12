import React from 'react';

export interface IOwnProps {

};

export interface IStateProps {
  counter: number,
};

export interface IDispatchProps {
  increment: (number: number, extra: number) => void,
  decrement: (number: number) => void,
};

type AppProps = IOwnProps & IStateProps & IDispatchProps;

class App extends React.Component<AppProps, {}> {
  increment = (): void => {
    this.props.increment(5, 1);
  }

  decrement = (): void => {
    this.props.decrement(5);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.counter}
        </div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;