import React, { Component } from "react";
import "./index.css";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((ch, i) => i !== index),
    });
  };

  handleSubmit = (char) => {
    this.setState({
      characters: [...this.state.characters, char],
    });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <h4>Employee List</h4>
        <Table charactersData={characters} remove={this.removeCharacter} />
        <h4 className="add-employee-title">Add Employee</h4>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
