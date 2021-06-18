import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

function ImageGrid({ setImg }) {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            className="img-wrap"
            key={doc.id}
            onClick={() => setImg(doc.url)}
          >
            <img src={doc.url} alt="Uploaded" />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
