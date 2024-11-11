import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => {
  return (
    <>
      <main className="layout-main">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;