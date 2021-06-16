import React, { Component } from 'react';
import './TextField.css';

interface Props {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue: string;
}

class TextField extends Component<Props> {
  render() {
    const { label, onChange, defaultValue } = this.props;
    return (
      <div className="text-field">
        <input placeholder={label} onChange={onChange} value={defaultValue} />
      </div>
    );
  }
}

export default TextField;
