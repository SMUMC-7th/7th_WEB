import React from "react";
import styled from "styled-components";
import { MOVIES, IMovies, TMovieDTO } from "../../mocks/movies";

const Container = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  width: 100vw;
  /* height: 100vh; */
  background-color: #f0f0f0;
  flex-wrap: wrap;
`;

const MovieCardBox = styled.div`
  width: 8.5%;
  /* height: ; */
  background-color: #fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 0.3s ease;

  margin: 10px;
`;

const MovieTitle = styled.h2`
  margin: 10px 0;
`;

const MovieImageWrapper = styled.div`
  width: 8.5%;
  height: 25vh;
  border-radius: 20px;
  &:hover {
    opacity: 0.8;
    background-color: #2f2f2f;
  }
  position: absolute;
`;

const MovieImage = styled.img`
  width: 100%;
  height: 25vh;
  border-radius: 20px;
  &:hover {
    filter: blur(2px);
  }
  object-fit: cover;
`;

function MovieCard({ movie }: { movie: TMovieDTO }) {
  const imgUrlPrefix = "https://image.tmdb.org/t/p/w500";

  return (
    <Container>
      <MovieCardBox key={movie.id}>
        {/* <MovieTitle>{movie.title}</MovieTitle> */}
        <MovieImageWrapper></MovieImageWrapper>
        <MovieImage
          src={`${imgUrlPrefix}${movie.poster_path}`}
          alt={movie.original_title}
        />
      </MovieCardBox>
    </Container>
  );
}

export default MovieCard;
