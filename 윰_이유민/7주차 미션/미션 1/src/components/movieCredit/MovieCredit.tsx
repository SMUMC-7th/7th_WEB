import { useParams } from 'react-router-dom';
import * as S from './MovieCredit.style';
import { PersonCard } from '../personCard/PersonCard';
import { axiosInstance } from '../../apis/axios-instance';
import { useQuery } from '@tanstack/react-query';
import { PersonCardSkeletonList } from '../personCard/skeleton/PersonCardSkeletonList';

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

  const getMovieCreditData = async () => {
    const { data } = await axiosInstance.get(
      `/movie/${movieId}/credits?language=ko`
    );
    return data;
  };

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery<MovieData>({
    queryKey: ['movieCreditData'],
    queryFn: getMovieCreditData,
  });

  if (isLoading) {
    return (
      <S.Container>
        <h2>감독 / 출연</h2>
        <S.CreditList>
          <PersonCardSkeletonList number={20} />
        </S.CreditList>
      </S.Container>
    );
  }

  if (isError) {
    return <div>에러 발생..</div>;
  }

  const { cast = [], crew = [] } = movie || {};

  return (
    <S.Container>
      <h2>감독 / 출연</h2>
      <S.CreditList>
        {cast.map((person, idx) => (
          <PersonCard key={`${person.id} - ${idx}`} person={person} />
        ))}
        {crew.map((person, idx) => (
          <PersonCard key={`${person.id} - ${idx}`} person={person} />
        ))}
      </S.CreditList>
    </S.Container>
  );
}

export { MovieCredit };
