import React from "react";
import MovieCard from "./MovieCard";
import { useQuery } from "@tanstack/react-query";
import getSuggestions from "../api/suggestionAPI";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";

const Carousal = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["suggestions"],
    queryFn: getSuggestions,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <ErrorPage/>
    );
  }

  return (
    <div className="flex flex-col gap-6 select-none pt-[.5rem] ">
      <h1 className="text-2xl">Top Suggestions</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center">
        {data.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            imdbID={movie.imdbID}
            runtime={movie.Runtime}
            poster={movie.Poster}
            imdbRating={movie.imdbRating}
            title={movie.Title}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousal;
