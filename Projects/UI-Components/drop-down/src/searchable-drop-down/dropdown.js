import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

function DropDown({ options, prompt, value, id, label, onChange }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    ['click', 'touchend'].forEach((e) => {
      document.addEventListener(e, toggle);
    });

    return () =>
      ['click', 'touchend'].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  function toggle(e) {
    setOpen(e && e.target === ref.current);
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return '';
  }

  function filterOptions(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function selectedOption(option) {
    onChange(option);
    setQuery('');
    setOpen(false);
  }

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            placeholder={prompt}
            value={displayValue()}
            ref={ref}
            onClick={toggle}
            onTouchEnd={toggle}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
          />
        </div>
        <div className={`arrow ${open ? 'open' : null}`}></div>
      </div>
      <div className={`options ${open ? 'open' : null}`}>
        {filterOptions(options).map((option) => (
          <div
            className={`option ${value === option ? 'selected' : null}`}
            key={option[id]}
            onClick={() => selectedOption(option)}
            onTouchEnd={() => selectedOption(option)}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropDown;
