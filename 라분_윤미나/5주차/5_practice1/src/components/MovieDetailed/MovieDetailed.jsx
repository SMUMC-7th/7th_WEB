import * as S from "./MovieDetailed.style";
import useCustomFetch from "../../hooks/useCustomFetch.js";

const MovieDetailed = ({ id }) => {
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${id}?language=ko`);

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  if (!movie) {
    return <h1 style={{ color: "white" }}>데이터가 없음</h1>;
  }

  const movieData = movie.data;

  return (
    <S.Container>
      <S.Article>
        <h1>{movieData.original_title}</h1>
        <p>평균 {movieData.vote_average}</p>
        <p>{movieData.release_date}</p>
        <p>{movieData.runtime}분</p>
        <h2>
          <i>{movieData.tagline}</i>
        </h2>
        <p>{movieData.overview}</p>
      </S.Article>
      <S.Img
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
      ></S.Img>
    </S.Container>
  );
};

export default MovieDetailed;
