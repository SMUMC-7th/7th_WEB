import * as S from "@/pages/Search/SearchPage.style.js";
import Card from "@/components/Card/Card.jsx";
import useCustomFetch from "@/hooks/useCustomFetch";
import { useNavigate, useSearchParams } from "react-router-dom";
import CardListSkeleton from "../Card/Skeleton/card-list-skeleton";

const SearchMovieList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams({
    mq: "",
  });
  const mq = searchParams.get("mq");
  const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;

  const { data: movies, isLoading, isError } = useCustomFetch(url);
  console.log(movies);

  if (isError) {
    return (
      <S.NoSearch>
        <h2>에러 발생</h2>
      </S.NoSearch>
    );
  }

  if (isLoading) {
    return (
      <S.MovieGridContainer>
        <CardListSkeleton number={20} />
      </S.MovieGridContainer>
    );
  }

  if (mq && movies?.results?.length === 0) {
    return (
      <S.NoSearch>
        <h2>해당하는 검색어 {mq}에</h2>
        <h2>해당하는 데이터가 없습니다.</h2>
      </S.NoSearch>
    );
  }

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <S.MovieGridContainer>
      {movies.results?.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          <Card movie={movie} />
        </div>
      ))}
    </S.MovieGridContainer>
  );
};

export default SearchMovieList;
