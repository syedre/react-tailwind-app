import React, { useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); //

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCount(0);
  };
  return (
    <>
      <div>Counter:{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default Counter;
