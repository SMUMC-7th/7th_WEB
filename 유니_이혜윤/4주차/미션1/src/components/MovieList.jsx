import Card from "@/components/Card/Card";
import { Container } from "./Movies.style";
import useCustomFetch from "@/hooks/useCustomFetch";

const MovieList = ({ category }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${category}?language=ko-KR&page=1`);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;

  return (
    <Container>
      {movies.results?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </Container>
  );
};

export default MovieList;
