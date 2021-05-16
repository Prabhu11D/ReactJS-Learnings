import React, { Component } from "react";

const withCounter = (WrappedComponent, increment) => {
  class WithCounter extends Component {
    state = {
      count: 0,
    };

    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + increment };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        />
      );
    }
  }

  return WithCounter;
};

export default withCounter;
