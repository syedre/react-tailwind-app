import React, { useReducer } from "react";
import { DECREMENT, INCREMENT, reducer } from "../reducers/todo";

const initialState = 0;

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {state}
      <button onClick={() => dispatch({ type: INCREMENT })}>Add</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Sub</button>
    </div>
  );
};

export default Counter;
