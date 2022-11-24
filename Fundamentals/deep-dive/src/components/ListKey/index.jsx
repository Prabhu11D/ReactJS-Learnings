import React from "react";
import { useState } from "react";


const ListKey = () => {
  const [targetId, setTargetId] = useState(1);
  const init = [{
      id: 1, char: "A"
      }, {
      id: 2, char: "B"
      },{
      id: 3, char: "C"
      },{
      id: 4, char: "D"
      }];

  const newList = [{
      id: 1, char: "B"
      }, {
      id: 10, char: "B"
      },{
      id: 13, char: "C"
      },{
        id: 5,
        char: "E"
      },{
      id: 4, char: "C"
      }];

  const [lists, setLists] = useState(init);

  return (
    <div>
      <ul>
        {lists.map((l,i) => <li key={l.id}>{l.char}</li>)}
      </ul>
      <button onClick={() => {
        setLists(newList)
      }}>Change Order</button>
    </div>
  )
}

export default ListKey;