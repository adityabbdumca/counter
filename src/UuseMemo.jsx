import React, { useState, useMemo } from "react";

function  UuseMemo() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Memoized value is only recalculated when 'count' changes
  const expensiveCalculation = useMemo(() => {
    console.log("Performing expensive calculation...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Count: {count}</p>
      <p>Other Count: {otherCount}</p>
      <p>Expensive Calculation (count * 2): {expensiveCalculation}</p>
      <button onClick={() => setCount(count +1)}>Increment Count</button>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increment Other Count</button>
    </div>
  );
}

export default  UuseMemo;

