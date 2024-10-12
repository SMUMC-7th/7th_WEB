import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import * as S from "./MovieCredit.style"
import { PersonCard } from "../personCard/PersonCard";

function MovieCredit() {
  const { movieId } = useParams();
  
  const {data: movie, isLoading, isError} = useCustomFetch(`/movie/${movieId}/credits?language=ko`);

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <div>에러 발생..</div>
  }

  const { cast, crew } = movie.data;

  return (
    <S.Container>
      <h2>감독 / 출연</h2>
      <S.CreditList>
        { cast.map((person, _) => (
          <PersonCard key={person.id} {...person} />
        )) }
        { crew.map((person, _) => (
          <PersonCard key={person.id} {...person} />
        )) }
      </S.CreditList>
    </S.Container>
  )
}

export {MovieCredit}