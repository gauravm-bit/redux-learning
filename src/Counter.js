import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div>
      <p>Current value of counter is : {counter}</p>
      <button onClick={increase}> Increase</button>
    </div>
  );
};

export default Counter;
