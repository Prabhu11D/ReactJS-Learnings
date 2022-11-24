import React, {useMemo, useState} from "react"
import { useEffect } from "react";
import { useFetch } from "./useFetch";

const options = {url: null}

const useStopWatch = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return count;
}

export const MasteringUseEffect = () => {
  console.log("APP rendering ...");
  const [options, setOptions] = useState({
    url: null,
    onSuccess: null
  })
  const count = useStopWatch();

  console.log("options -> ", options);

  // DANGER ZONE >>> OBJECT DEPENDENCIES

  // in useFetch there is a new Object passed {url} every render, means
  // new reference created and there is one reference, so it causes to
  // many re-renders ----

  // const {data} = useFetch({
  //   url
  // });


  // Solution 1
  // use Global Variable, only one reference, but we can't change the URL value
  // in the options ----

  // const {data} = useFetch(options)


  // Solution 2
  // useMemo, whenever url change new oobject created

  // const options = useMemo(() => ({url}), [url]);
  // const {data} = useFetch(options);


  // Solution 3
  // don't use Object in Dependencies, use primitive or object property that has
  // primitive value


  // DANGER ZONE >>> function dependencies
  const {data} = useFetch(options);

  return (
    <div className="App">
      <h2>Hello</h2>
      <h3>Count : {count}</h3>
      <h1>{JSON.stringify(data)}</h1>
      <button onClick={() => {
        setOptions(v => ({
          ...v,
          url: "/json/jack.json"
        }))
      }}>Jack</button>
      <button onClick={() => {
        setOptions(v => ({
          ...v, 
          url: "/json/sally.json"
        }))
      }}>Sally</button>
      <div>
        <button onClick={() => {
          setOptions(v => ({
            ...v,
            onSuccess: () => console.log("onSuccess function added")
          }))
        }}>Change onSuccess Function</button>
      </div>
    </div>
  )
}
