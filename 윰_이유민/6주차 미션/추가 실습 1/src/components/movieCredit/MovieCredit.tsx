import { useParams } from 'react-router-dom';
import useCustomFetch from '../../hooks/useCustomFetch';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';
import * as S from './MovieCredit.style';
import { PersonCard } from '../personCard/PersonCard';

interface Person {
  id: number;
  name: string;
  profile_path: string;
  character?: string;
  job?: string;
}

interface MovieData {
  cast: Person[];
  crew: Person[];
}

function MovieCredit() {
  const { movieId } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch<{ data: MovieData }>(
    `/movie/${movieId}/credits?language=ko`
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <div>에러 발생..</div>;
  }

  const { cast = [], crew = [] } = movie?.data || {};

  return (
    <S.Container>
      <h2>감독 / 출연</h2>
      <S.CreditList>
        {cast.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
        {crew.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </S.CreditList>
    </S.Container>
  );
}

export { MovieCredit };
