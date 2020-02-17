import React from "react";

const Counter = ({ counter, onIncrement, onSendFive }) => {
  return (
    <div>
      <span>{counter.count}</span>
      <button onClick={onIncrement}>increment</button>
      <button
        onClick={() => {
          onSendFive(5);
        }}
      >
        sendFive
      </button>
    </div>
  );
};

export default Counter;
