/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";

function useGif(query) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);
  const url = `https://g.tenor.com/v1/random?key=TOQ75ZBSCI8S&limit=40`;

  const fetchGifs = async (query) => {
    setLoading(true);
    console.log(url);
    const randomNum = Math.floor(Math.random() * 40);
    const { data } = await axios.get(
      query ? `${url}&q=${query}` : `${url}&q=cat`
    );
    console.log(data);
    setGif(data.results[randomNum].media[0].gif.url);
    setLoading(false);
  };

  useEffect(() => {
    fetchGifs(query);
  }, []);

  return [gif, fetchGifs, loading];
}

export default useGif;
