import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCounter, name } = this.props;
    return (
      <button onClick={incrementCounter}>
        {name} Clicked {count} Times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 2);
