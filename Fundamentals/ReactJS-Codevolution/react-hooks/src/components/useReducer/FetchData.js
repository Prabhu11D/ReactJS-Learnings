import React, { useEffect, useReducer } from "react";
import axios from "axios";

function FetchData() {
  const initialState = {
    loading: true,
    error: "",
    post: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "fetch-success":
        return {
          loading: false,
          error: "",
          post: action.payload,
        };
      case "fetch-fails":
        return {
          loading: false,
          error: "Something went wrong",
          post: {},
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => dispatch({ type: "fetch-success", payload: res.data }))
      .catch((err) => dispatch({ type: "fetch-fails" }));
  }, []);

  return (
    <div>
      {state.loading ? "Loading . . . " : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchData;
