import React, { useEffect, useState } from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "./MovieDetailPage.style";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./../../components/loadingSpinner/LoadingSpinner";

function MovieDetailPage() {
  // const {movieId} = useParams(); 로도 사용가능
  const params = useParams();
  const { movieId } = params;
  // 상태 정의
  const [movieDetail, setMovieDetail] = useState();
  const [movieActors, setMovieActors] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // 나중에 필요 시 hook으로 뺄 수 있음
  useEffect(() => {
    async function getMovieDetail(movieId) {
      try {
        setIsLoading(true);
        const resApi = await authInstance.get(
          `/movie/${movieId}?language=ko-KR`
        );
        setMovieDetail(resApi.data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    }
    async function getMovieActors(movieId) {
      try {
        setIsLoading(true);
        const resApi = await authInstance.get(
          `/movie/${movieId}/credits?language=ko-KR`
        );
        setMovieActors(resApi.data.cast);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
      setIsLoading(false);
    }

    // api 호출
    getMovieDetail(movieId);
    getMovieActors(movieId);
  }, [movieId]);

  return (
    <S.Container>
      {movieDetail && (
        <S.TopBox
          imgUrl={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
        >
          <S.TopHoverBox>
            {isLoading && <LoadingSpinner />}
            {isError && <p>불러오는 중 오류가 발생했습니다</p>}
            <h2>{movieDetail.title}</h2>
            <p>{movieDetail.overview}</p>
            <p>평점 {movieDetail.vote_average}</p>
            <p>개봉일 {movieDetail.release_date}</p>
            <p>상영시간 {movieDetail.runtime} 분</p>
          </S.TopHoverBox>
        </S.TopBox>
      )}
      <S.ActorsBox>
        <S.ActorsCardBox>
          {movieActors &&
            movieActors.map((actor) => {
              return (
                <S.ActorsCard key={actor.movieId}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  />
                  <p>{actor.name}</p>
                  <p>{actor.character} 역</p>
                </S.ActorsCard>
              );
            })}
        </S.ActorsCardBox>
      </S.ActorsBox>
    </S.Container>
  );
}

export default MovieDetailPage;
