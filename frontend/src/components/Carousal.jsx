import React from "react";
import MovieCard from "./MovieCard";

const Carousal = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <h1 className="text-2xl" >Top Suggestions</h1>
        <div className="flex gap-4">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Carousal;
