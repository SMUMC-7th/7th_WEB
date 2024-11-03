import { useState } from "react";
import { Button, ButtonColor } from "./components/button/Button.tsx";
import { FaApple } from "react-icons/fa";
import MovieCard from "./components/movieCard/MovieCard";
import { MOVIES, IMovies, TMovieDTO } from "../../mocks/movies";

function App() {
  const movie: TMovieDTO = {
    adult: false,
    backdrop_path: "/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
    genre_ids: [28, 878, 27],
    id: 615656,
    original_language: "en",
    original_title: "Meg 2: The Trench",
    overview:
      "전 세계에서 가장 깊은 마리아나 해구, 역사상 가장 거대하고 무자비한 포식자가 도사리는 그곳에서 강철 다이버 ‘조나스’(제이슨 스타뎀)가 더 맹렬하게 돌아온 ‘메가로돈’과 짜릿한 대결을 펼치는 액션 어드벤처",
    popularity: 2429.447,
    poster_path: "/cbAHK6Vrt0GClMRUxH8TsgC2JqL.jpg",
    release_date: "2023-08-15",
    title: "메가로돈 2",
    video: false,
    vote_average: 7,
    vote_count: 1790,
  };
  // const number = 123; // const로 지정하면 타입이 해당 내용으로 추론됨
  return (
    <>
      {/* <Button
        color={ButtonColor.SKYBLUE}
        bcg={ButtonColor.WHITE}
        fontSize={"15px"}
        borderRadius={"10px"}
      >
        Tabs
      </Button> */}
      <MovieCard movie={movie} />
    </>
  );
}

export default App;
