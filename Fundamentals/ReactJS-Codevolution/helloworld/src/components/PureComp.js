import React from "react";
import MemoComp from "./MemoComp";

class ParentComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Prabhu",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Prabhu",
      });
    }, 2000);
  }

  render() {
    console.log("**************** Parent Component *******************");
    return (
      <div>
        <h2>ParentComponent {this.state.name}</h2>
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
