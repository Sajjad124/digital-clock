import logo from './logo.svg';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();
  return (
    <div className="App">
      <header className="App-header">
        <h1>{time}</h1>
      </header>
    </div>
  );
}

export default App;
