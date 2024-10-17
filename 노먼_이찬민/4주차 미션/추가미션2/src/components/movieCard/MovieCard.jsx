import React, { useState } from "react";
import * as S from "./Movie.style";
import { authInstance } from "../../api/axiosInstance";

function MovieCard(props) {
  const [isHover, setIsHover] = useState();
  const {
    id,
    poster_path,
    title,
    release_date,
    handleClickCard,
    movie,
    handleClickMyCard,
  } = props;
  console.log(handleClickCard, handleClickMyCard);

  return (
    <S.Container
      onMouseEnter={() => setIsHover(id)}
      onMouseLeave={() => setIsHover(0)}
      onClick={() =>
        handleClickCard !== undefined
          ? handleClickCard(movie)
          : handleClickMyCard(movie)
      }
    >
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      {isHover === id && <S.BackDrop></S.BackDrop>}
      <S.Title>{title}</S.Title>
      <S.Date>{release_date}</S.Date>
    </S.Container>
  );
}

export default MovieCard;
