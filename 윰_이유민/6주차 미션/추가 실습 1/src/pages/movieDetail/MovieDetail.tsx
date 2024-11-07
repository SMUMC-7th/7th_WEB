import * as S from './MovieDetail.style';
import MovieInfo from '../../components/movieInfo/MovieInfo';
import { MovieCredit } from '../../components/movieCredit/MovieCredit';

function MovieDetail() {
  return (
    <S.Container>
      <MovieInfo />
      <MovieCredit />
    </S.Container>
  );
}

export default MovieDetail;
