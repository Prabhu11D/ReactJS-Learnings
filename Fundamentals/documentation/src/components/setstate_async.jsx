import React, { Component } from "react";

export default class State extends Component {
  state = {
    name: "Prabhu",
    timeline: [
      {
        age: 14,
        doing: "Love the God",
      },
      {
        age: 15,
        doing: "Love the Ammu",
      },
      {
        age: 17,
        doing: "Crying in College",
      },
      {
        age: 22,
        doing: "Seeking for Job",
      },
    ],
  };

  changeName = () => {
    console.log(this.state);
    // setState is Asynchronous
    this.setState(
      {
        name: this.state.name === "Ammu" ? "Prabhu" : "Ammu",
      },
      // Callback function
      () => {
        console.log(this.state);
      }
    );
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2 onClick={this.changeName}>{this.state.name}</h2>
        {this.state.timeline.map((done) => (
          <h2 key={done.age}>{`${done.doing} at ${done.age}`}</h2>
        ))}
      </div>
    );
  }
}
