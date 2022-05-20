import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  resetCounter,
} from "../../features/CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };
  const onAddAmount = () => {
    dispatch(incrementByAmount(Number(incrementAmount) || 0));
  };

  const onResetCounter = () => {
    dispatch(resetCounter());
  };
  return (
    <div className="row card p-5 ">
      <h1>Counter App</h1>

      <h2>{count}</h2>
      <div className="mt-3">
        {" "}
        <button className="btn btn-success me-3" onClick={onIncrement}>
          Increment
        </button>
        <button className="btn btn-danger" onClick={onDecrement}>
          Decrement
        </button>
      </div>
      <div className="row mt-5 d-flex- justify-content-center">
        <input
          className="mb-3 w-25 "
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button className="btn btn-warning me-3" onClick={onAddAmount}>
            Add Amount
          </button>
          <button className="btn btn-danger" onClick={onResetCounter}>
            Reset Counter
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Link className="nav-link" to="/">
          Go To Home
        </Link>
      </div>
    </div>
  );
}

export default Counter;
