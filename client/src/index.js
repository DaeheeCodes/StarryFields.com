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
import OutsideSidebar from './OutsideSidebar.js';
import InsideSidebar from './InsideSidebar.js';
const rootElement = document.getElementById("root");

/* 
Uses React Router v6 Outlet to declare pages inside and outside of Sidebar.
Outlet refers back to the child element put at the end.
So <SideBar /> <Outlet /> becomes <SideBar /> - <Route/>..
*/

render(
  <BrowserRouter>
    <Routes>
      <Route element={<OutsideSidebar />}>
            <Route exact path="/" element={<Landing />}/>
      </Route>  
      <Route element={<InsideSidebar />}>
          <Route path="home" element={<App />} />
          <Route path="portfolio" element={<Portfolio />}/>
    </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

/*
 each page is built separately reference /pages for each page
*/

reportWebVitals();
