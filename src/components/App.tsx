import React from 'react';

export interface PropsFromState {
  counter: number,
};

export interface PropsFromDispatch {
  increment: (number) => void,
  decrement: (number) => void,
};

interface AppProps extends PropsFromDispatch, PropsFromState {};

class App extends React.Component<AppProps, {}> {
  increment = (): void => {
    this.props.increment(5);
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