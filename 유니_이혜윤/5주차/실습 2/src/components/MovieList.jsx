import Card from "@/components/Card/Card";
import { Container } from "./Movies.style";
import useCustomFetch from "@/hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";

const MovieList = ({ category }) => {
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(
    `/movie/${category}?include_adult=false&include_video=false&&language=ko-KR&page=1`
  );

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <Container>
      {movies.results?.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          <Card movie={movie} />
        </div>
      ))}
    </Container>
  );
};

export default MovieList;
