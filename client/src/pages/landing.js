
import React from "react";
import MyVideo from "/Users/dhc/StarryFields/client/src/LandingVid.mp4";
import { useNavigate } from "react-router-dom";





export default function Landing() {
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home`; 
    navigate(path);
  }
    return (
        <video width="100%" height="100%" preload="auto" onClick={routeChange} autoPlay loop muted>
        <source src={MyVideo} type="video/mp4" />
    </video>
    );
  }
