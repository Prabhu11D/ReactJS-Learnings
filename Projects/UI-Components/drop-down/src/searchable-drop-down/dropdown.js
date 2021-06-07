import React from 'react';
import './styles.css';

function DropDown({ countries }) {
  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">Select a Value</div>
        <div className="arrow"></div>
      </div>
      <div className="options">
        {countries.map((country) => (
          <div className="option">{country.name}</div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
