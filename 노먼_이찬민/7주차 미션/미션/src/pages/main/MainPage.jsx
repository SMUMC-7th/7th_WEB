import React, { useEffect, useRef, useState } from "react";
import * as S from "./MainPage.style";
import MovieList from "./../../components/movieList/MovieList";
import useMovies from "../../hooks/useMovies";
import { useInView } from "react-intersection-observer";

function MainPage() {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useMovies(
    "/movie/now_playing" + "?language=ko-KR" + "&page=" + page
  );

  return (
    <S.Container>
      <MovieList movies={data?.results} isLoading={isLoading} isError={error} />
      <S.PagenationBar>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          이전
        </button>
        <p>{page} 페이지</p>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === data?.total_pages}
        >
          다음
        </button>
      </S.PagenationBar>
    </S.Container>
  );
}

export default MainPage;
