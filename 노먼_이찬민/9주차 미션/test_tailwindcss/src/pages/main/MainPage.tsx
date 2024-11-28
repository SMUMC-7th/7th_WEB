import React, { useEffect, useRef, useState } from "react";
import useMovies from "../../hooks/useMovies";
import MovieList from "../../components/MovieList";
import Navbar from "../../components/Navbar";

function MainPage() {
  const { isLoading, error, data } = useMovies(
    "/movie/now_playing" + "?language=ko-KR"
  );

  return (
    <div className="min-w-full min-h-full bg-[#111111] flex flex-col items-center">
      <Navbar></Navbar>
      <div className="max-w-[80%]">
        <MovieList
          movies={data?.results}
          isLoading={isLoading}
          isError={error}
        />
      </div>
    </div>
  );
}

export default MainPage;
