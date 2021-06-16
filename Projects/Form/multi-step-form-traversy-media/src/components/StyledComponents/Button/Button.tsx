import './Button.css';
import React, { Component } from 'react';

interface Props {
  name: string;
  handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

class Button extends Component<Props> {
  render() {
    const { name, handleChange } = this.props;
    return (
      <div className="Button">
        <button onClick={handleChange}>{name}</button>
      </div>
    );
  }
}

export default Button;
