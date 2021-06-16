import React, { Component } from 'react';
import ConfirmUserDetails from './ConfirmUserDetails';
import FormPersonalDetail from './FormPersonalDetail';
import FormUserDetails from './FormUserDetails';
import Success from './Success';

export interface userFormState {
  step: number;
  firstName: string;
  lastName: string;
  email: string;
  occupation: string;
  city: string;
  bio: string;
}

class UserForm extends Component {
  state: userFormState = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  };

  prevStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  handleChange =
    (input: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ [input]: e.target.value });
    };

  render() {
    const { step, firstName, lastName, email, bio, city, occupation } =
      this.state;

    const values = { firstName, lastName, email, bio, city, occupation };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
          />
        );
      case 2:
        return (
          <FormPersonalDetail
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmUserDetails
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success />;
    }
    return (
      <div>
        <h1>User Form</h1>
      </div>
    );
  }
}

export default UserForm;
