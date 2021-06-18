import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
  console.log('Upload Form...');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleChangle = (e) => {
    console.log('UploadForm -> Handle Change running...');
    const selected = e.target.files[0];
    const types = ['image/png', 'image/jpeg'];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError('Please select a valid file (png or jpeg)');
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChangle} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
