import React, { useEffect, useState } from "react";

function Item({ match }) {
  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const result = await data.json();
    setItem(result.data.item);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.images.background} alt="Character" />
    </div>
  );
}

export default Item;
