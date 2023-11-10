import React from "react";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className={css.container}>
      <div className={css.Navbar}>
        <Navbar />
      </div>
      <div className={css.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
