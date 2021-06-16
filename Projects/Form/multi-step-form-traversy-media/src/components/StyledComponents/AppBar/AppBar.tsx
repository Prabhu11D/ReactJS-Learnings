import React, { Component } from 'react';
import './AppBar.css';

interface Props {
  title: string;
}

class AppBar extends Component<Props> {
  render() {
    return <div className='AppBar'>{this.props.title}</div>;
  }
}

export default AppBar;
