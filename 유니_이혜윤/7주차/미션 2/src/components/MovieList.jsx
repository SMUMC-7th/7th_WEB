import Card from "@/components/Card/Card";
import { Container, InfiniteStyle } from "./Movies.style";
import { useNavigate } from "react-router-dom";
import CardListSkeleton from "./Card/Skeleton/card-list-skeleton";
import { useGetInfiniteMovies } from "../hooks/queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const MovieList = ({ category }) => {
  const navigate = useNavigate();

  const {
    data: movies,
    isPending,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = useGetInfiniteMovies(category);
  // console.log(movies);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending) {
    return (
      <Container>
        <CardListSkeleton number={20} />
      </Container>
    );
  }

  if (isError) return <p>Error occurred 😭</p>;

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <>
      <Container>
        {movies?.pages.map((page) => {
          return page?.results.map((movie, _) => {
            return (
              <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
                <Card movie={movie} />
              </div>
            );
          });
        })}
        {isFetching && <CardListSkeleton number={20} />}
      </Container>
      <InfiniteStyle ref={ref}>
        {isFetching && <ClipLoader color={"#fff"} />}
      </InfiniteStyle>
    </>
  );
};

export default MovieList;
