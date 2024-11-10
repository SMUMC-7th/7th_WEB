import * as S from './MovieCard.style';
import { useNavigate } from 'react-router-dom';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface MovieCardProps {
  movie: Movie;
}

function MovieCard(movie: MovieCardProps) {
  const { id, poster_path, title, release_date } = movie.movie;
  const nav = useNavigate();

  return (
    <S.Container>
      <S.ImageContainer
        $imgUrl={`https://image.tmdb.org/t/p/w500/${poster_path}`}
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
