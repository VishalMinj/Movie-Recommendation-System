import React from "react";
import Carousal from "../components/Carousal";
import { useQuery } from "@tanstack/react-query";
import getSuggestions from "../api/suggestionAPI";
import LoadingPage from "../pages/LoadingPage";
import ErrorPage from "../pages/ErrorPage";

const HomePage = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ["suggestions"],
    queryFn: getSuggestions,
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
      <Carousal movies={data} />
    </div>
  );
};

export default HomePage;
