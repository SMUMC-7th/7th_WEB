import { useParams } from 'react-router-dom';
import * as S from './MovieInfo.style';
import { axiosInstance } from '../../apis/axios-instance';
import { useQuery } from '@tanstack/react-query';
import { InfoCardSkeleton } from './skeleton/InfoCardSkeleton';

interface MovieData {
  poster_path: string;
  title: string;
  vote_average: string;
  release_date: string;
  runtime: string;
  tagline: string;
  overview: string;
}

function MovieInfo() {
  const { movieId } = useParams();

  const getMovieInfoData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}?language=ko-kr`
    );
    return data;
  };

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<MovieData>({
    queryKey: ['movieInfoData'],
    queryFn: getMovieInfoData,
  });

  if (isLoading) {
    return <InfoCardSkeleton />;
  }

  if (isError) {
    return <div>에러 발생..</div>;
  }

  const {
    poster_path = '',
    title = '',
    vote_average = '',
    release_date = '',
    runtime = '',
    tagline = '',
    overview = '',
  } = movie || {};

  return (
    <S.Container>
      <S.PosterContainer
        $img={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      >
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
  );
}

export default MovieInfo;
