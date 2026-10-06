import { useState } from "react";
import { Counter } from "./components/counter";

function App() {
  const [changeShirts, setChangeShirts] = useState(false);
  return (
    <>
      <div>
        {
          changeShirts ? (
            <>
              <span>Shirts counts: </span> <Counter key={"shirts"} />
            </>) : (
            <>
              <span>Shoes counts: </span> <Counter key={"shoes"} />
            </>
          )
        }
        <br />
        <input type="number" key={changeShirts ? "shirts" : "shoes"} />
        <button onClick={() => setChangeShirts(s => !s)}>Switch</button>
      </div>
    </>
  );
}

export default App;
