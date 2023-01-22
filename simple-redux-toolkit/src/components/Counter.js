import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0);

  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment byAmont
      </button>
    </div>
  );
};

export default Counter;
