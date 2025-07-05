import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const defaultLayout = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="min-h-dvh w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default defaultLayout;
