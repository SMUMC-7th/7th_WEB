import * as S from "./MovieLIst.style.js";
import MovieCard from "../../components/MovieCard/MovieCard";
import CardListSkeleton from "../../components/MovieCard/Skeleton/Card-List-Skeleton.jsx";
import { useGetInfiniteMovies } from "../../hooks/queries/useGetInfiniteMovies.js";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const MovieList = ({ category }) => {
  //isPending : 데이터를 불러오는 중. 데이터가 로딩중일 때 isPending이 true가 됨.
  //isLoading : 데이터를 불러오는 중 or 재시도 중일 때 true가 됨.
  const {
    data: movies,
    isPending,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteMovies({ category });
  //console.log("무비데이터 구조:", movies);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending) {
    return (
      <S.MovieContainer>
        <CardListSkeleton number={20} />;
      </S.MovieContainer>
    );
  }
  if (isError) {
    return (
      <S.TextContainer>
        <h2>에러발생</h2>
      </S.TextContainer>
    );
  }

  return (
    <S.Column>
      <S.Container>
        {movies?.pages?.map((page) => {
          return page?.results?.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          });
        })}
        {/* {movies?.pages
          ?.map((page) => page.results)
          ?.flat()
          ?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))} */}

        {isFetching && (
          <S.MovieContainer>
            <CardListSkeleton number={20} />;
          </S.MovieContainer>
        )}
      </S.Container>
      <S.ScrollContainer ref={ref}>
        {isFetching && <ClipLoader color="#fff" />}
      </S.ScrollContainer>
    </S.Column>
  );
};

export default MovieList;
