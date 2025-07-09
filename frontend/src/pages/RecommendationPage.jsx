import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getRecommendations from "../api/recommendationAPI";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";
import Carousal from "../components/Carousal";

const RecommendationPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["recommendation"],
    queryFn: () => getRecommendations(id), // Pass the movie ID to the API function
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="px-[1rem] md:px-[2rem] lg:px-[4rem] min-h-dvh w-full pt-[var(--navbar-height)] flex flex-col items-center pb-[5rem] ">
      <Carousal movies={data} heading={data[0].Title} hideSearch={true} />
    </div>
  );
};

export default RecommendationPage;
