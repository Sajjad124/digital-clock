import "./App.css";
import { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <div>
    <div className="App">
      <header className="App-header">
        <h1>Digital Clock</h1>
        <h1>{ctime}</h1>
      </header>
    </div>
    </div>
  );
}

export default App;
