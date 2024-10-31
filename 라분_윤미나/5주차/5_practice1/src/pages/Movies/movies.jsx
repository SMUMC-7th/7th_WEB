import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "../../components/MovieList/MovieLIst.style";
import useCustomFetch from "../../hooks/useCustomFetch";

const MoviesPage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/popular?language=ko&page=1`);

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  return (
    <Container>
      {movies.data?.results.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </Container>
  );
};

export default MoviesPage;
