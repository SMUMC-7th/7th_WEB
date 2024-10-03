import React, { useState } from "react";
import * as S from "./MovieCard.style";

function MovieCard(props) {
  // ...movie 로 받으면 movie 안에 있는 속성 하나하나를 개별적으로 다 props로 전달 가능
  // movie={movie}로하면 props.movie로 접근 해야함
  const { title, poster_path, setIsHover, isHover } = props;
  const IMAGE_PREFIX = "https://image.tmdb.org/t/p/original";
  return (
    <S.Container
      onMouseEnter={() => setIsHover(props.id)}
      onMouseLeave={() => setIsHover(0)}
    >
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      {isHover === props.id && <S.BackDrop></S.BackDrop>}
    </S.Container>
  );
}

export default MovieCard;
