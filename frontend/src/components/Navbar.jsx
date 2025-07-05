import React from "react";

const Navbar = () => {
  return (
    <div className="h-[var(--navbar-height)] fixed w-full top-0 left-0 flex justify-between items-center bg-gray-800 text-white py-4 px-[4rem]">
      <h1>Movie Recommernder</h1>
    </div>
  );
};

export default Navbar;
