import React from "react";

function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="Image-Card">
      <img src={image.webformatURL} alt="picture" />
      <div>
        <div>Photo by {image.user}</div>
        <ul>
          <li>
            <strong>Views : </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads : </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes : </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div>
        {tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
