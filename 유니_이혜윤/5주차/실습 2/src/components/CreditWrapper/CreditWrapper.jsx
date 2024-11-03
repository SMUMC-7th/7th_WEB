import useCustomFetch from "@/hooks/useCustomFetch";
import CreditProfile from "@/components/CreditProfile/CreditProfile";
import * as S from "./CreditWrapper.style";

const CreditWrapper = ({ movieId }) => {
  const {
    data: credit,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`);
  console.log(credit);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;

  const cast = credit.cast || [];
  const crew = credit.crew || [];

  return (
    <S.Container>
      <h2>감독 / 출연</h2>
      <S.Credit>
        {cast.map((cast) => (
          <CreditProfile key={cast.id} {...cast} />
        ))}
        {crew.map((crew) => (
          <CreditProfile key={crew.id} {...crew} />
        ))}
      </S.Credit>
    </S.Container>
  );
};

export default CreditWrapper;
