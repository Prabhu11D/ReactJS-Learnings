import React, { useState } from 'react';
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


const useCallbackRef = (callback) => {
  console.log("useCallbackRef ", callback);
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    console.log("useLayout Effect running...");
    callbackRef.current = callback;
    console.log("callbackRef", callbackRef);
  }, [callback]);
  return callbackRef;
};

export const useFetch = (options) => {
  console.log("useFetch running ...");
  const [data, setData] = useState(null);
  const onSuccessRef = useCallbackRef(options.onSuccess);
  console.log("onSuccessRef ", onSuccessRef);

  useEffect(() => {
    console.log("useFetch ... useEffect ...");
    if (options.url) {
      fetch(options.url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          onSuccessRef.current?.();
          setData(data)
        });
    }
  }, [options.url])

  return {
    data,
  }
}

function deepCompare(oldDep, newDep) {
  // React Dependencies Comparision internals
  // Reference is important in Object, Array and function
  return oldDep.length === newDep.length && oldDep.every((dep, i) => dep === newDep[i])
}


// console.log(deepCompare([], [])); // true
// console.log(deepCompare([{ a: "A" }], [{ a: "A" }])); // false
// let obj = { a: "A" }
// console.log(deepCompare([obj], [obj]));