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
  prevStep: () => void;
}

class FormUserDetails extends Component<Props> {
  continue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <AppBar title="Enter Personal Details" />
        <br />
        <TextField
          label="Enter Your Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          label="Enter Your City"
          onChange={handleChange('city')}
          defaultValue={values.city}
        />
        <br />
        <TextField
          label="Enter Your Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
        />
        <br />
        <Button name="Continue" handleChange={this.continue} />
        <br />
        <Button name="Back" handleChange={this.back} />
      </div>
    );
  }
}

export default FormUserDetails;
