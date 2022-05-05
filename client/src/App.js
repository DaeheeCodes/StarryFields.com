import React from "react";
import "./App.css";
import Home from "./pages/home.js";
import Sidebar from "./Sidebar.js";
import background from "./background.jpg"

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <div className="background-image">
      <Sidebar/>
      </div>
  );
}

export default App;