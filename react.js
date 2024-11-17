import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count updated");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}


return (

<div>
<p> count: {count}</p>
<button onclick={()=> setCount(count + 1)}> Increment </button>
<button onclick={()=> setCount(0)}>Reset</button>
</div>

  );
}

