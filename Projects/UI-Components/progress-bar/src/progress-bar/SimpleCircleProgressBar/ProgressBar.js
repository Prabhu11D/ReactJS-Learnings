import React, { useState, useEffect, useRef } from 'react';
import './style.css';

function ProgressBar(props) {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const { size, progress, width, circleOneStroke, circleTwoStroke } =
    props;

  const center = size / 2;
  const radius = center - width / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style = `transition: stroke-dashoffset 100ms ease-in-out`;
  }, [setOffset, progress, circumference, offset]);

  return (
    <>
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          cx={center}
          cy={center}
          r={radius}
          stroke={circleOneStroke}
          strokeWidth={width}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          stroke={circleTwoStroke}
          strokeWidth={width}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text className="svg-circle-text" x={center} y={center}>
          {progress}%
        </text>
      </svg>
    </>
  );
}

export default ProgressBar;
