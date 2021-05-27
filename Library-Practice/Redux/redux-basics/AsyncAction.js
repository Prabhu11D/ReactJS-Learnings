const redux = require("redux");
const axios = require("axios");
const thunk = require("redux-thunk").default;

const applyMiddleWare = redux.applyMiddleware;
const createStore = redux.createStore;

const FETCHING_USERS = "FETCHING_USERS";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILS = "FETCH_USER_FAILS";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

// Actions
function fetchUsersRequest() {
  return {
    type: FETCHING_USERS,
  };
}

function fetchSuccess(users) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
}

function fetchFails(error) {
  return {
    type: FETCH_USER_FAILS,
    payload: error,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USERS:
      return {
        loading: true,
        users: [],
        error: "",
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILS:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

function fetchUser() {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchSuccess(users));
      })
      .catch((error) => dispatch(fetchFails(error.message)));
  };
}

const store = createStore(reducer, applyMiddleWare(thunk));
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUser());
