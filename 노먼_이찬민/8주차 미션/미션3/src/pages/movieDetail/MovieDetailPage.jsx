import React, { useEffect, useState } from "react";
import { authInstance } from "../../api/axiosInstance";
import * as S from "./MovieDetailPage.style";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./../../components/loadingSpinner/LoadingSpinner";
import useMovies from "../../hooks/useMovies";

function MovieDetailPage() {
  // const {movieId} = useParams(); 로도 사용가능
  const params = useParams();
  const { movieId } = params;

  // { data, isLoading, error }
  const movieDetailObject = useMovies(`/movie/${movieId}?language=ko-KR`);
  const movieDetail = movieDetailObject.data;
  const movieActorsObject = useMovies(
    `/movie/${movieId}/credits?language=ko-KR`
  );
  const movieActors = movieActorsObject.data?.cast;
  const isLoading = movieDetailObject.isLoading || movieActorsObject.isLoading;
  const isError = movieDetailObject.error || movieActorsObject.error;

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
