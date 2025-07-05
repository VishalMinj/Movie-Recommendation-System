import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const MovieCard = ({runtime, imdbRating ,title, imdbID, poster}) => {
   
  const [posterURL, setPosterURL] = useState("");
  useEffect(() => {
    if (poster) {
      setPosterURL(poster);
    } else {
      setPosterURL("https://via.placeholder.com/300x450?text=No+Poster+Available");
    }
  }, []);

  return (
      <div className={`bg-green-100 group overflow-hidden bg-cover bg-center h-[13.5rem] min-[375px]:h-[15rem] md:h-[20rem] aspect-[2/3] lg:h-[17rem] rounded-md shadow-lg flex items-end relative`}>
        <div className="bg-white z-2 bg-opacity-80 w-full p-2 translate-y-[2.75rem] group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 ease-in-out">
          <h2 className="text-md md:text-lg font-semibold truncate whitespace-nowrap overflow-hidden">
            {title}
          </h2>
          <p className="text-sm text-gray-700">Runtime: {runtime}</p>
          <p className="text-sm text-gray-700">IMDB Rating: {imdbRating}</p>
        </div>
        <img
          src={posterURL}
          alt={title}
          className="absolute z-1 inset-0 w-full h-full object-cover  transition-opacity duration-300 ease-in-out"
        />
      </div>
  );
};

export default MovieCard;
