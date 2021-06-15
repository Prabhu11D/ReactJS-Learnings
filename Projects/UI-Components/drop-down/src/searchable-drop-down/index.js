import React, { useState } from 'react';
import animals from './data/animals.json';
import DropDown from './dropdown';

function SearchableDropDown() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <DropDown
        options={animals}
        id="id"
        label="name"
        prompt="Select a Animal..."
        value={value}
        onChange={(text) => setValue(text)}
      />
    </div>
  );
}

export default SearchableDropDown;
