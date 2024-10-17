import React, { useState } from "react";
import * as S from "./MovieCard.style";
import { useNavigate } from "react-router-dom";

function MovieCard(props) {
  // ...movie 로 받으면 movie 안에 있는 속성 하나하나를 개별적으로 다 props로 전달 가능
  // movie={movie}로하면 props.movie로 접근 해야함
  const [isHover, setIsHover] = useState(0);
  const { id, title, poster_path, release_date } = props;

  const navigate = useNavigate();
  const handleClickCard = (id) => {
    navigate("/movies/" + id);
  };

  return (
    <S.Container
      onMouseEnter={() => setIsHover(id)}
      onMouseLeave={() => setIsHover(0)}
      onClick={() => handleClickCard(id)}
    >
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      {isHover === id && <S.BackDrop></S.BackDrop>}
      <S.Title>{title}</S.Title>
      <S.Date>{release_date}</S.Date>
    </S.Container>
  );
}

export default MovieCard;
