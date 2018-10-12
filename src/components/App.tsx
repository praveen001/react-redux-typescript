import React from 'react';

export interface IOwnProps {
  title: string;
}

export interface IStateProps {
  counter: number;
}

export interface IDispatchProps {
  increment: (x: number, extra: number) => void;
  decrement: (x: number) => void;
}

type AppProps = IOwnProps & IStateProps & IDispatchProps;

class App extends React.Component<AppProps, {}> {
  public increment = (): void => {
    this.props.increment(5, 1);
  };

  public decrement = (): void => {
    this.props.decrement(5);
  };

  public render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
