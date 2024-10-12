import { useState } from 'react';
import * as S from './MovieCard.style.js';
import { useNavigate } from 'react-router-dom';

function MovieCard(movie) {
  const [isHover, setIsHover] = useState(false);
  const { id, poster_path, title, release_date } = movie.movie;
  const nav = useNavigate();

  return (
    <S.Container>
      <S.ImageContainer
        $imgUrl={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title}의 포스터`}
        onClick={() => nav(`/movies/${id}`)}
      />
      <S.InfoContainer>
        <h5>{title}</h5>
        <p>{release_date}</p>
      </S.InfoContainer>
    </S.Container>
  );
}

export default MovieCard;
