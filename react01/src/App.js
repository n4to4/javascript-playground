import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [multiplier, setMultiplier] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {count} x {multiplier} = {count * multiplier}
        </p>
        <button onClick={() => setCount(count + 1)}>Counter</button>
        <button onClick={() => setMultiplier(multiplier + 1)}>Multiplier</button>
      </header>
    </div>
  );
}

export default App;
