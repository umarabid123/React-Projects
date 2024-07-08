import React, { useState } from "react";

const Counter = () => {
  const count = 1;

  const [counts, setCounter] = useState(1);

  const onDecrement = () => {
    setCounter(counts - 1);
  };
  const onIncreament = () => {
    setCounter(counts + 1);
  };
  const onResthendler = () => {
    setCounter(0);
  };
  return (
    <div className="flex justify-center">
      <button onClick={onDecrement}>-</button>
      {counts}
      <button onClick={onIncreament}>+</button> 
      <button onClick={onResthendler}>Reset Counter</button>
    </div>
  );
};

export default Counter;
