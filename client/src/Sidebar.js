import "./Sidebar.css";
import SidebarLink from "./SidebarLink";
import React from "react";
import { NavLink } from "react-router-dom";  
import styled from "styled-components";
import BungalowIcon from '@mui/icons-material/Bungalow';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import DraftsIcon from '@mui/icons-material/Drafts';
import {useState} from "react";
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
//style-components used to apply styles directly to the U
const NavUnlisted = styled.ul `
@font-face {
    font-family: repet;
    src: url(repet.ttf);
}

@media only screen and (min-width: 420px) {
    .icon {
      display: none;
    }
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
    const [sideBarExpanded, setExpanded] = useState(false)

  return(
    <div className="sidebar">
        <h1 className="title">Starry Fields</h1>
            <NavUnlisted>
                <NavLink to="/home" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact >
                    <SidebarLink className="link" text="Home" /> <BungalowIcon className ="icon"  />
                </NavLink>
                <NavLink to="./pages/portfolio.js" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="About Us"/> <GroupIcon className ="icon" />
                </NavLink>
                <NavLink to="./pages/portfolio.js" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Dev Notes" /> <LibraryBooksIcon className ="icon" />
                </NavLink>
                <NavLink to="/portfolio" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Daehee's Portfolio"/> <LogoDevIcon className ="icon" />
                </NavLink>
                <NavLink to="./pages/portfolio.js" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Contact Us" /> <DraftsIcon className ="icon" />
                </NavLink>
            </NavUnlisted>
    </div>
  );
}
export default Sidebar;