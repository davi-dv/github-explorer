import { useState } from "react";

// hook -> gancho
export function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    console.log(setCounter)
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increments
      </button>
    </div>
  );
}
