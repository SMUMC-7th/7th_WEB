import React from "react";
import * as S from "../main/MainPage.style";
import MovieList from "../../components/movieList/MovieList";
import { useNavigate, useParams } from "react-router-dom";
import { movieCategoriesENUM } from "../_shared/Shared";
import useInfiniteMovies from "../../hooks/useInfiniteMovies";
import { useInView } from "react-intersection-observer";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import MovieCard from "../../components/movieCard/MovieCard";

function MoviesPage() {
  const navigate = useNavigate();
  const { category } = useParams();
  if (
    category !== movieCategoriesENUM.NOWPLAYING &&
    category !== movieCategoriesENUM.POPULAR &&
    category !== movieCategoriesENUM.TOPRATED &&
    category !== movieCategoriesENUM.UPCOMING
  ) {
    alert("잘못된 카테고리값입니다. 메인으로 이동합니다.");
    navigate("/");
  }

  const { infiniteData } = useInfiniteMovies(
    "/movie/" + category + "?language=ko-KR"
  );

  // useInView로는 알아서 ref가 보이는 순간 inView값 변경해줌
  const [ref, inView] = useInView();

  // inView 바뀌면 다음 페이지 페치해오는 훅 선언 (리렌더링마다 실행)
  useInfiniteScroll(inView, infiniteData);

  return (
    <S.Container>
      <S.MovieList>
        {infiniteData.data?.pages.map((page) => {
          return page.results.map((movie, _) => {
            return <MovieCard key={movie.id} movie={movie} />;
          });
        })}
      </S.MovieList>
      <S.ContentEnd ref={ref} />
    </S.Container>
  );
}

export default MoviesPage;
