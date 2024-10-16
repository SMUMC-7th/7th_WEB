import { useState } from "react";
import * as C from "./Movie.style";

const Movie = ({ movie, onAddMovie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <C.MovieWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onAddMovie(movie)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      {isHovered && <C.HoverMovie></C.HoverMovie>}
    </C.MovieWrapper>
  );
};

export default Movie;
