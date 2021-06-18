import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

function ProgressBar({ file, setFile }) {
  console.log('ProgressBar ...');
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
}

export default ProgressBar;
