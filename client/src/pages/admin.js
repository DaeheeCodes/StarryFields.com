import React from "react";
import './admin.css';
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./mongocomponents/navbar.js";
import RecordList from "./mongocomponents/recordList.js";
import Edit from "./mongocomponents/edit.js";
import Create from "./mongocomponents/create.js";

const Admin = () => {
 return (
   <div className="admincontainer">
     <Navbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
     </Routes>
   </div>
 );
};
 
export default Admin;