import React from "react";

const Navbar = () => {
  return (
    <div className="h-[var(--navbar-height)] fixed w-full top-0 left-0 flex flex-row justify-start  bg-gray-800 text-white py-4 px-[1rem] md:px-[2rem] lg:px-[4rem] shadow-xl">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Movie Recommernder</h1>
    </div>
  );
};

export default Navbar;
