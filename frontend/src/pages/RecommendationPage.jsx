import React from 'react'
import { useParams } from 'react-router-dom';

const RecommendationPage = () => {
    const { id } = useParams();

  return (
    <div className="px-[1rem] md:px-[2rem] lg:px-[4rem] min-h-dvh w-full pt-[var(--navbar-height)] flex flex-col items-center pb-[5rem] ">
      <h1>Recommendation Page  {id}</h1>
    </div>
  );
}

export default RecommendationPage