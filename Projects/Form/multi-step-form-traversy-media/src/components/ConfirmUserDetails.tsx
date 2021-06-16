import React, { Component } from 'react';
import AppBar from './StyledComponents/AppBar/AppBar';
import Button from './StyledComponents/Button/Button';
import ListItem from './StyledComponents/ListItem/ListItem';

interface Props {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    occupation: string;
    city: string;
    bio: string;
  };
  nextStep: () => void;
  prevStep: () => void;
}

class ConfirmUserDetails extends Component<Props> {
  continue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div>
        <AppBar title="Confirm User Details" />
        <ListItem label="First Name" value={values.firstName} />
        <ListItem label="Last Name" value={values.lastName} />
        <ListItem label="Email Address" value={values.email} />
        <ListItem label="Occupation" value={values.occupation} />
        <ListItem label="City" value={values.city} />
        <ListItem label="Bio" value={values.bio} />
        <br />
        <Button name="Confirm & Continue" handleChange={this.continue} />
        <br />
        <Button name="Back" handleChange={this.back} />
      </div>
    );
  }
}

export default ConfirmUserDetails;
