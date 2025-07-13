import React from "react";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SEARCH_URL } from "../utils/constants";

const Carousal = ({
  heading = "Suggested for you",
  movies,
  hideSearch = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ws, setWs] = useState(null);
  const [isSearchLoading, setIsSearchLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const websocket=new WebSocket(`${SEARCH_URL}`);
    setWs(websocket);

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSearchResult(data);
      setIsSearchLoading(false);
    };

    return () => {
      websocket.close();
    };

  }, []);


  const handleSearch = (e) => {
    setIsSearchLoading(true);
    setSearchQuery(e.target.value);
    ws.send(JSON.stringify({ query: searchQuery}));
  };
  

  const handleSearchNavigation = (id) => {
    navigate(`/${id}`);
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col gap-6 select-none pt-[.5rem] ">
      <div className={`relative ${hideSearch && "invisible"}`}>
        <input
          onChange={handleSearch}
          type="text"
          value={searchQuery}
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
            (searchQuery === "") && "hidden"
          } z-3 flex flex-col gap-2 absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-lg mt-2 p-4`}
        >
          {searchResult &&
            (searchResult.length < 1 ? (
              <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                No results found
              </li>
            ) : (
              searchResult.map((movie) => (
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
        {movies.map((movie) => (
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
