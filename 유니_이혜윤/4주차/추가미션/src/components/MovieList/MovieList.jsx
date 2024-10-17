import Movie from "../Movie/Movie";
import * as S from "./MovieList.style";
import useCustomFetch from "../../hooks/useCustomFetch";

const MovieList = ({ onAddMovie }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(
    `/3/movie/popular?include_adult=false&include_video=false&&language=ko-KR&page=1`
  );
  // console.log(movies);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;

  return (
    <S.Container>
      <h2>Movies</h2>
      <S.Content>
        {movies.results?.map((movie) => (
          <div key={movie.id}>
            <Movie movie={movie} onAddMovie={onAddMovie} />
          </div>
        ))}
      </S.Content>
    </S.Container>
  );
};

export default MovieList;
