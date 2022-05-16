import React from 'react';
import Sidebar from './Sidebar.js';
import { Outlet } from 'react-router';
import Footer from './footer.js';

export default () => {
  return (
    <>
      <Sidebar />
      <Footer />
      <Outlet />
    </>
  );
};