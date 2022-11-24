import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MasteringUseState = () => {
  const [search, setSearch] = useState("h");
  const [animal, ] = useState([{
    name: "Elephant"
  },{
    name: "Lion"
  },{
    name: "Tiger"
  },{
    name: "Rabbit"
  }])

  const handleSearch = (e) => {
    console.log("handle search");
    setSearch(e.target.value);
    console.log({search: e.target.value});
  }

  // useEffect(() => {
  //   console.log("useEffect running");
  //   console.log({search});
  //   const newani = animal.filter(ani => ani.name.includes(search));
  //   console.log({newani});
  // }, [search]);


  return (
    <>
      <input type="text" value={search} onChange={handleSearch}/>
    </>
  )

}

export default MasteringUseState;