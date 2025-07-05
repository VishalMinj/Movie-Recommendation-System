import React from "react";

const MovieCard = () => {
  return (
    <div className="bg-green-100 group overflow-hidden bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoy_muFIbptZ4XkgTX4NSLX13BHk0MDTiOmQ&s')] bg-cover bg-center w-[200px] h-[300px] rounded-md shadow-lg flex items-end">
      <div className="bg-white bg-opacity-80 w-full p-2 translate-y-[2.75rem] group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <h2 className="text-lg font-semibold truncate whitespace-nowrap overflow-hidden">
          Movie Title :dfdfdfddfdfde
        </h2>

        <p className="text-sm text-gray-700">Release Date: 2023</p>
        <p className="text-sm text-gray-700">IMDB Rating: 8.7/10</p>
      </div>
    </div>
  );
};  

export default MovieCard;
