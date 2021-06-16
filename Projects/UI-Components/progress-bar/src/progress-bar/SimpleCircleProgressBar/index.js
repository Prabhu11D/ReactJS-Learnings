import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function SimpleCircleProgressBar() {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    const value = Math.floor(Math.random() * 100);
    setProgress(value);
  };

  return (
    <div>
      <ProgressBar
        size={300}
        progress={progress}
        width={15}
        circleOneStroke="#ccc"
        circleTwoStroke="red"
      />
      <div style={{ textAlign: 'center' }}>
        <button onClick={handleClick}>Random</button>
      </div>
    </div>
  );
}

export default SimpleCircleProgressBar;
