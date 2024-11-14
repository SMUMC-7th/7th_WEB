import * as S from "../../pages/Search/search.style";
import * as T from "./serch-movie-list.style.js";
import { useSearchParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import MovieCard from "../../components/MovieCard/MovieCard";
import CardListSkeleton from "../MovieCard/Skeleton/Card-List-Skeleton.jsx";

const SearchMovieList = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    mq: "",
  });

  const mq = searchParams.get("mq");
  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
  const { data: movies, isLoading, isError } = useCustomFetch(url);

  if (isError) {
    return (
      <T.TextContainer>
        <h2>에러발생</h2>
      </T.TextContainer>
    );
  }

  if (isLoading) {
    return (
      <S.MovieContainer>
        <CardListSkeleton number={20} />;
      </S.MovieContainer>
    );
  }

  if (mq && movies.data?.results.length === 0) {
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
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </S.MovieContainer>
  );
};

export default SearchMovieList;
