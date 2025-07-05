import React from "react";
import MovieCard from "./MovieCard";

const Carousal = () => {
  return (
      <div className="flex flex-col gap-6 select-none pt-[.5rem] ">
        <h1 className="text-2xl">Top Suggestions</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lgx :grid-cols-6 gap-4 sm:gap-6 place-items-center">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
    </div>
  );
};

export default Carousal;
