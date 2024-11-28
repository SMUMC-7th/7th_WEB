import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieCard(props) {
  // ...movie 로 받으면 movie 안에 있는 속성 하나하나를 개별적으로 다 props로 전달 가능
  // movie={movie}로하면 props.movie로 접근 해야함
  const [isHover, setIsHover] = useState(0);
  const { movie } = props;

  const navigate = useNavigate();
  const handleClickCard = (id) => {
    navigate("/movies/detail/" + id);
  };

  return (
    <div
      onMouseEnter={() => setIsHover(movie.id)}
      onMouseLeave={() => setIsHover(0)}
      onClick={() => handleClickCard(movie.id)}
      className=""
    >
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      {isHover === movie.id && (
        <div>
          <div>{movie.title}</div>
          <div>{movie.release_date}</div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
