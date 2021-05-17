import React, { Component } from "react";
import CompC from "./CompC";
import { UserConsumer } from "./UserContext";

class CompB extends Component {
  static contextType = UserConsumer;

  render() {
    return (
      <div>
        <h3>CompB {this.context}</h3>
        <CompC />
      </div>
    );
  }
}

export default CompB;
