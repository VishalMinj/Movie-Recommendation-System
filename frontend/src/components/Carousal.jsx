import React from "react";
import MovieCard from "./MovieCard";
import { useQuery } from "@tanstack/react-query";
import getSuggestions from "../api/suggestionAPI";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import { useState } from "react";
import getSearchMovies from "../api/searchAPI";
import { useNavigate } from "react-router-dom";

const Carousal = ({heading = "Suggested for you"}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["suggestions"],
    queryFn: getSuggestions,
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: searchResults,
    isLoading: isSearchLoading,
    error: searchError,
  } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: () => getSearchMovies(searchQuery),
    enabled: searchQuery !== "",
    staleTime: 1000 * 60 * 5,
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchNavigation = (id) => {
    navigate(`/${id}`);
    setSearchQuery("");
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-col gap-6 select-none pt-[.5rem] ">
      <div className="relative">
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder="Search for a movie"
          className="w-full p-2 border border-gray-300 rounded outline-none peer"
        />
        <img
          src="/icons/progress.svg"
          alt="Loading"
          className={`absolute top-1/2 right-[10px] transform translate-y-[-50%] animate-spin ${
            !isSearchLoading && "hidden"
          }`}
        />
        <ul
          className={`${
            searchQuery === "" && "hidden"
          } z-3 flex flex-col gap-2 absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-lg mt-2 p-4`}
        >
          {searchResults &&
            (searchResults.length < 1 ? (
              <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                No results found
              </li>
            ) : (
              searchResults.map((movie) => (
                <li
                  key={movie.id}
                  onClick={() => handleSearchNavigation(movie.id)}
                  className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                >
                  {movie.title}
                </li>
              ))
            ))}
        </ul>
      </div>
      <h1 className="text-2xl">{heading}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3  gap-4 sm:gap-6 place-items-center">
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
