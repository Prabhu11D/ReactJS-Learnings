import React from 'react';
import countries from './data/countries.json';
import DropDown from './dropdown';

function SearchableDropDown() {
  return (
    <div>
      <DropDown countries={countries} />
    </div>
  );
}

export default SearchableDropDown;
