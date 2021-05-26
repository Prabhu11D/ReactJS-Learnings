import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    setItems(items.data);
  };

  return (
    <div>
      <h2>Shop Page</h2>
      {items.map(item => (
        <h3 key={item.itemId} >
          <Link to={`/shop/${item.itemId}`} >{item.item.name}</Link>
        </h3>

      ))}
    </div>
  );
}

export default Shop;
