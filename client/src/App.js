import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from './pages/landing.js';
import { Link } from "react-router-dom";


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>landing</h1>
      </header>
    </div>
  );
}

export default App;