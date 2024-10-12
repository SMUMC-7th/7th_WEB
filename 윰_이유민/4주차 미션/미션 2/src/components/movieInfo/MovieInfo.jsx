import { useParams } from "react-router-dom";
import * as S from './MovieInfo.style';
import useCustomFetch from "../../hooks/useCustomFetch";
import LoadingSpinner from "../../components/loadingSpinner/loadingSpinner";

function MovieInfo() {
  const { movieId } = useParams();
  
  const {data: movie, isLoading, isError} = useCustomFetch(`/movie/${movieId}?language=ko-kr`);
  
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <div>에러 발생..</div>
  }

  
  const { poster_path, title, vote_average, release_date, runtime, tagline, overview } = movie.data;

  return (
    <S.Container>
      <S.PosterContainer $img={`https://image.tmdb.org/t/p/w500/${poster_path}`}>
        <S.DetailContainer>
          <h2>{title}</h2>
          <p>평균 {vote_average}</p>
          <p>{release_date}</p>
          <p>{runtime}분</p>
          <h4>{tagline}</h4>
          <p>{overview}</p>
        </S.DetailContainer>
      </S.PosterContainer>
    </S.Container>
  )
}

export default MovieInfo;