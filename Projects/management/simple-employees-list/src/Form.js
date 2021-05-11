import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      job: "",
    };
    this.state = this.initialState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;
    console.log(name, job);
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="job">Job</label>
          <input
            id="job"
            name="job"
            type="text"
            placeholder="Job"
            value={job}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="add">Add</label>
          <input id="add" type="submit" />
        </div>
      </form>
    );
  }
}

export default Form;
