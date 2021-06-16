import React, { Component } from 'react';
import AppBar from './StyledComponents/AppBar/AppBar';

class Success extends Component {
  render() {
    return (
      <div>
        <AppBar title="Successfully Submitted" />
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Thanks</p>
      </div>
    );
  }
}

export default Success;
