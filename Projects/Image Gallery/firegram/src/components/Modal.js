import React from 'react';

function Modal({ img, setImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) setImg(null);
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={img} alt="enlarge pic" />
    </div>
  );
}

export default Modal;
