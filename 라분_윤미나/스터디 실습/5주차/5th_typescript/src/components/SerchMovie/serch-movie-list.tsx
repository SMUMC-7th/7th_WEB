import * as S from "../../page/Search/search.style.ts";
import * as T from "./serch-movie-list.style.ts";
import { useSearchParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch.ts";
import MovieCard from "../Moviecard/MovieCard.tsx";
import CardListSkeleton from "../Moviecard/Skeleton/Card-List-Skeleton.tsx";
import { TMoviesDTO, FetchResponse } from "../../type/movieType.ts";

const SearchMovieList = () => {
  const [searchParams] = useSearchParams({
    mq: "",
  });

  const mq = searchParams.get("mq");
  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<FetchResponse>(url);

  if (isError) {
    return (
      <T.TextContainer>
        <h2>에러발생</h2>
      </T.TextContainer>
    );
  }

  if (isLoading) {
    return <CardListSkeleton number={20} />;
  }

  if (mq && movies?.results.length === 0) {
    return (
      <T.TextContainer>
        <h2>
          검색어 {mq}에 <br />
          해당하는 데이터가 없습니다.
        </h2>
      </T.TextContainer>
    );
  }

  return (
    <S.MovieContainer>
      {movies?.results.map((movie: TMoviesDTO) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </S.MovieContainer>
  );
};

export default SearchMovieList;
