import * as S from './MovieCard.style';
import { useNavigate } from 'react-router-dom';
import { MovieResults } from '../../mocks/movies';

interface MovieProps {
  movie: MovieResults;
}

function MovieCard({ movie }: MovieProps) {
  const nav = useNavigate();

  const { id, title, poster_path, release_date } = movie;

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
