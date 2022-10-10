import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {actions} from './Store/index'
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch( actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement())
  };
 
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter} </h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
