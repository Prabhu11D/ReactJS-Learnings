import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented } from './features/counter/counter-slice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(incremented(5));
  };

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
}

export default App;
