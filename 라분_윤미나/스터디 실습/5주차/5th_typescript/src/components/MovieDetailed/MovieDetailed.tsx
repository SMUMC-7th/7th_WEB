import * as S from "./MovieDetailed.style.js";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import { TMovieDetails } from "../../mocks/movieType.js";

const MovieDetailed = ({ id }: { id: number }) => {
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch<TMovieDetails>(`/movie/${id}?language=ko`);

  if (isLoading) {
    return <S.H1>로딩중...</S.H1>;
  }
  if (isError) {
    return <S.H1>Error</S.H1>;
  }

  if (!movie) {
    return <S.H1>데이터가 없음</S.H1>;
  }

  return (
    <S.Container>
      <S.Article>
        <h1>{movie.original_title}</h1>
        <p>평균 {movie.vote_average}</p>
        <p>{movie.release_date}</p>
        <p>{movie.runtime}분</p>
        <h2>
          <i>{movie.tagline}</i>
        </h2>
        <p>{movie.overview}</p>
      </S.Article>
      <S.Img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      ></S.Img>
    </S.Container>
  );
};

export default MovieDetailed;
