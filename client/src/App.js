import React from "react";
import "./App.css";
import Home from "./pages/home";
/*
left the boilerplate useEffect just in case
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
*/

function App() {

  return (
    <div className="background">
      <div className="content">
          <Home />
      </div>
    </div>  
  );
}

export default App;