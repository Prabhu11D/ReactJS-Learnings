import React, { useEffect, useState } from "react";
import Header from "./Header";
import Grid from "./Grid";
import axios from "axios";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    console.log(response.data);
    setItems(response.data);
    setIsLoading(false);
  };
  return (
    <div className="container">
      <Header setQuery={setQuery} />
      <Grid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
