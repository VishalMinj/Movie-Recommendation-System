import React from "react";
import Carousal from "../components/Carousal";

const HomePage = () => {
  return (
    <div className="min-h-dvh w-full pt-[calc(var(--navbar-height)+4rem)] flex flex-col items-center ">
      <Carousal />
    </div>
  );
};

export default HomePage;
