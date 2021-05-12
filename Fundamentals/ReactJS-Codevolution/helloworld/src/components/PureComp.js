import React from "react";

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
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

class RegComp extends React.Component {
  render() {
    console.log("Regular Components");
    return <h2>RegularComponent {this.props.name}</h2>;
  }
}

class PureComp extends React.PureComponent {
  render() {
    console.log("Pure Components");
    return <h2>PureComponent {this.props.name}</h2>;
  }
}

export default ParentComp;
