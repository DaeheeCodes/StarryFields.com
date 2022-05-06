import React from "react";
import "./App.css";
import Home from "./pages/home";
/*
left the boilerplate useEffect just in case
*/

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="background">
      <div className="content">
          <Home />
      </div>
    </div>  
  );
}

export default App;