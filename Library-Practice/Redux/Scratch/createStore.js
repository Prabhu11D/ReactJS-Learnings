function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return () => {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  dispatch({});

  return { dispatch, subscribe, getState };
}
