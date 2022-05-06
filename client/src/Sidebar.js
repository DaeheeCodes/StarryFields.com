import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
import React from "react";
import { NavLink } from "react-router-dom";  
import styled from "styled-components";

//style-components used to apply styles directly to the U
const NavUnlisted = styled.ul `
@font-face {
    font-family: repet;
    src: url(repet.ttf);
}


.sidebar{
    font-family: repet;
    width: 9%;
    height: 100%;
    padding: 10px 10px;
    box-shadow: 0 0 1px white;
    background-color: transparent;
    position: absolute;
    color: beige;
    background-image: url(./background.jpg);
    background-size: cover;
    background-position: top;
  }

`


//NavLink is used to support styling options that Link does not support
function Sidebar(){
  return(
    <div className="sidebar">
        <h1 className="title">Starry Fields</h1>
            <NavUnlisted>
                <NavLink to="/home" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact >
                    <SidebarLink text="Home" />
                </NavLink>
                <NavLink to="./pages/portfolio.js" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink text="About Us" />
                </NavLink>
                <NavLink to="./pages/portfolio.js" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink text="Dev Notes" />
                </NavLink>
                <NavLink to="/portfolio" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink text="Daehee's Portfolio"/>
                </NavLink>
                <NavLink to="./pages/portfolio.js" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink text="Contact Us" />
                </NavLink>
            </NavUnlisted>
    </div>
  );
}
export default Sidebar;