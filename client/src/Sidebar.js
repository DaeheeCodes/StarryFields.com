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
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeIcon from '@mui/icons-material/Home';import {useState} from "react";
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Admin from "./pages/admin";
//transcription bug where some css components dont get inheritted. using style component for readability rather than in-line.

const NavUnlisted = styled.ul `
@font-face {
    font-family: repet;
    src: url(repet.ttf);
}

@media only screen and (max-width: 500px) {
  .sidebar {
    width: 7%;
    box-shadow: 0 0 0.7px white;
  }

  .link {
    display: none;
  }
}

@media only screen and (min-width: 500px) {
  .sidebar {
    width: 7%;
    max-width: 120px;
    box-shadow: 0 0 0.7px white;
  }

  .icon {
     visibility: hidden;
  }
}

@media only screen and (max-width: 500px) {
  .icon {
    display: block;
  }
}


.navIcon:hover {
    color: rgba(26, 180, 194, 0.5);
    transition: color 100ms ease-out;
    cursor: pointer;
}

`

//NavLink is used to support styling options that Link does not support
function Sidebar(){

  return(
    <div className={'sidebar'}>
        <h2 className="title">Starry Fields</h2>
            <NavUnlisted > 
                <NavLink to="/home" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact >
                    <SidebarLink className="link" text="Home" /> <HomeIcon className ="icon"  />
                </NavLink>
                <NavLink to="/devNotes" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Dev Notes" /> <LibraryBooksIcon className ="icon" />
                </NavLink>
                <NavLink to="/about" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="About Us"/> <GroupIcon className ="icon" />
                </NavLink>
                <NavLink to="/contactUs" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Contact Us" /> <DraftsIcon className ="icon" />
                </NavLink>
                <NavLink to="/credits" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Credits"/> <ConstructionIcon className ="icon" />
                </NavLink>s
                <NavLink to="/admin" style={{ textDecoration: 'none' , color: 'beige'}} activeClassName="current" exact>
                    <SidebarLink className="link" text="Admin"/> <AdminPanelSettingsIcon className ="icon" />
                </NavLink>
            </NavUnlisted>
    </div>
  );
}
export default Sidebar;

/*
@media only screen and (min-width: 450px) {
    .icon {
      display: none;
    }
  }*/

  /*     const [sidebarExpanded, setExpanded] = useState(false)

  return(
    <div className={sidebarExpanded ? "sidebar" : "sidebar extended"}>

    */