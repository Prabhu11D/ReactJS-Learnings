import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client'


const SubList = ({content, times}) => {
  const list = [];
  for(let i=1; i<=times; i++){
    list.push(content+"--"+i);
  }
  return list.map(l => <li>{l}</li>)
}

const RenderingList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    for(let i=1; i<= 1000; i++){
      setList(arr => {
        return [...arr, "L-"+i];
      })
    };
  }, [])

  return (
    <>
    <ul>
      {list.map(l => 
      <li>{l}{
        <ul>
          <SubList content={l} times={200} />
        </ul>
      }</li>)}
    </ul>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('react')).render(
    <RenderingList />
)
