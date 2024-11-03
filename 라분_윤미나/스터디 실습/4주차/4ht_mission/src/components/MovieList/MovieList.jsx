import Movie from "../Movie/Movie";
import * as S from "./MovieList.Style";
import useCustomFetch from "../../hooks/useCustomFetch";
import ErrorLottie from "../Error/Error";
import LoadingLottie from "../Loding/Loding";

const MoviesList = ({ myMovies, setMyMovies }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/popular?language=ko&page=1`);
  //console.log(movies);

  if (isLoading) {
    return <LoadingLottie />;
  }
  if (isError) {
    return <ErrorLottie />;
  }
  return (
    <S.Container>
      <h1>Movies</h1>
      <S.List>
        {movies !== undefined &&
          movies.data?.results?.map((movie) => {
            return (
              <Movie
                key={movie.id}
                {...movie}
                myMovies={myMovies}
                setMyMovies={setMyMovies}
              />
            );
          })}
      </S.List>
    </S.Container>
  );
};

export default MoviesList;
