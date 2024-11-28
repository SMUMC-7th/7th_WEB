import * as S from "./MovieLIst.style.js";
import MovieCard from "../Moviecard/MovieCard";
import CardListSkeleton from "../Moviecard/Skeleton/Card-List-Skeleton";
import { useGetInfiniteMovies } from "../../hooks/queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ErrorLottie from "../../components/Error/Error";
import { TMoviesDTO } from "../../type/movieType.js";

const MovieList = ({ category }: { category: string }) => {
  const {
    data: movies,
    isPending,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteMovies({ category });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending) {
    return <CardListSkeleton number={20} />;
  }
  if (isError) {
    return (
      <S.TextContainer>
        <ErrorLottie />
      </S.TextContainer>
    );
  }

  return (
    <S.Column>
      <S.Container>
        {movies?.pages?.map((page) => {
          return page?.results?.map((movie: TMoviesDTO) => {
            return <MovieCard key={movie.id} {...movie} />;
          });
        })}
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
