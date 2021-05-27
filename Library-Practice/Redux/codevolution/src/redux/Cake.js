import { createStore } from "redux";

// Action Name
const BUY_CAKE = "BUY_CAKE";

// action creator
export function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

// initialState
const initialState = {
  numOfCakes: 10,
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
