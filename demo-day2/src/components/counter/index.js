import { useState } from "react";

function Counter() {
  const [clickCounter, setclickCounter] = useState(0);
  return (
    <>
      <h2 data-testid="counter">Button has been clicked {clickCounter} time(s)</h2>
      <button onClick={() => setclickCounter(clickCounter + 1)}>
        update click count
      </button>
    </>
  );
}

export default Counter;
