import React, { useState } from 'react';
import { ImageGrid, Title, UploadForm, Modal } from './components';

function App() {
  const [showImg, setShowImg] = useState(null);
  return (
    <div className="App">
      {console.log('APP running...')}
      <Title />
      <UploadForm />
      <ImageGrid setImg={setShowImg} />
      {showImg && <Modal img={showImg} setImg={setShowImg} />}
    </div>
  );
}

export default App;
