import { useState } from 'react';
import * as S from './MovieCard.style.js'

function MovieCard(movie) {

  const [isHover, setIsHover] = useState(false);
  const {  poster_path, title, release_date} = movie.movie;

  return <S.Container>
    <S.ImageContainer>
      <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" onMouseOver={() => setIsHover(true)} onMouseOut={() => {setIsHover(false)}} />
      { isHover && <S.Backdrop />}
    </S.ImageContainer>
    <S.InfoContainer>
      <h5>{title}</h5>
      <p>{release_date}</p>
    </S.InfoContainer>
  </S.Container>
}

export default MovieCard;