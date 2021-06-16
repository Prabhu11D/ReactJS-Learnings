import React, { useEffect, useState } from 'react';
import SimpleLinearProgressBar from './SimpleLinearProgressBar';

function SimpleProgressBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => {
        const newValue = value + 0.2;
        if (newValue >= 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 20);
  }, []);

  return (
    <SimpleLinearProgressBar
      value={value}
      max={100}
      color="red"
      width="1000px"
    />
  );
}

export default SimpleProgressBar;
