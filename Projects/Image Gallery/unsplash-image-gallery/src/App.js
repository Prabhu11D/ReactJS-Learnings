import React, { useEffect, useState } from "react";
import "./assets/style.css";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((data) => data.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, [term]);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ImageSearch searchText={setTerm} />
          {!isLoading && images.length === 0 && <h1>Image Not Found</h1>}
          <div className="grid-container">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
