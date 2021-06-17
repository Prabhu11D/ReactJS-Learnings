import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchCountries } from '../api';
import '../styles/country-picker.css';

interface Props {
  handleCountry: (country: string) => void;
}

function CountryPicker(props: Props) {
  const [country, setCountry] = useState<string[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await fetchCountries();
      setCountry(data);
    };
    fetchCountry();
  }, []);

  return (
    <div className="country-picker">
      <h3>Select Country</h3>
      <select onChange={(e) => props.handleCountry(e.target.value)}>
        <option value="">Global</option>
        {country.map((data, i) => (
          <option key={i}>{data}</option>
        ))}
      </select>
    </div>
  );
}

export default CountryPicker;
