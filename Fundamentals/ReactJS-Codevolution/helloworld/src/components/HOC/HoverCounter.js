import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCounter, name } = this.props;
    return (
      <h2 onMouseOver={incrementCounter}>
        {name} Hovered {count} Times
      </h2>
    );
  }
}

export default withCounter(HoverCounter, 10);
