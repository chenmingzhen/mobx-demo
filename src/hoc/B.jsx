import React, { useReducer } from "react";
import { initialState, reducer } from "../store/reducer";
const B = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      B:{state.count}
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default B;