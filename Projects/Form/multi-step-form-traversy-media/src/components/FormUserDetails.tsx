import React, { Component } from 'react';
import AppBar from './StyledComponents/AppBar/AppBar';
import Button from './StyledComponents/Button/Button';
import TextField from './StyledComponents/TextField/TextField';

interface Props {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    occupation: string;
    city: string;
    bio: string;
  };
  handleChange: (
    input: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
}

class FormUserDetails extends Component<Props> {
  continue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <AppBar title="Enter User Details" />
        <br />
        <TextField
          label="Enter Your First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          label="Enter Your Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          label="Enter Your Email Address"
          onChange={handleChange('email')}
          defaultValue={values.email}
        />
        <br />
        <Button name="Continue" handleChange={this.continue} />
      </div>
    );
  }
}

export default FormUserDetails;
