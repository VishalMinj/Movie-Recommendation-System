import React from "react";
import Carousal from "../components/Carousal";

const HomePage = () => {
  return (
    <div className="px-[1rem] md:px-[2rem] lg:px-[4rem] min-h-dvh w-full pt-[var(--navbar-height)] flex flex-col items-center pb-[5rem] sm:pb-0">
      <Carousal />
    </div>
  );
};

export default HomePage;
