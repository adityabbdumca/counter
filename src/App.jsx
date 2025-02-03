import React, { useState, useCallback } from "react";
import UuseMemo from "./UuseMemo";

import Redu from "./component/Redu";
function App() {
  const [count, setCount] = useState(0);

  // useCallback ensures that this function is only re-created if 'count' changes
  const increment = useCallback(() => {
    setCount((p) => p + 1);
  }, [count]);

  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <UuseMemo></UuseMemo>
      <Redu>  </Redu>
    </div>
  );
}

export default App;
