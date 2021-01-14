import React, { Component } from "react";

class ClassClick extends Component {
    click() {
        console.log("Class Clicked");
    }
    render() {
        return <button onClick={this.click}>Class Click</button>;
    }
}

export default ClassClick;
