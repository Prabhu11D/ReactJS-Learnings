import React, { Component } from 'react';
import './ListItem.css';

interface Props{
  label: string;
  value: string;
}

class ListItem extends Component <Props>{
  render() {
    const {label, value} = this.props;
    return (
      <div className='ListItem'>
        <h4>{label}</h4>
        <p>{value}</p>       
      </div>
    )
  }
}

export default ListItem
