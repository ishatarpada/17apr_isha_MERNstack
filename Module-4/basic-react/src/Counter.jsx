import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}