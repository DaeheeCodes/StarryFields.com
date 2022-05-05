import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./pages/landing.js";
import {render} from 'react-dom';
import Portfolio from './pages/portfolio.js';
import Sidebar from './Sidebar';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Sidebar/>
    <Routes>
      <Route path="portfolio" element={<Portfolio />}></Route>  
      <Route path="home" element={<App />} />
      <Route exact path="/" element={<Landing />}>
    </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
