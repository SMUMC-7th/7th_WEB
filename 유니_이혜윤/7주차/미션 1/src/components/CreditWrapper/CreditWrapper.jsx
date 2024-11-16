// import useCustomFetch from "@/hooks/useCustomFetch";
import CreditProfile from "@/components/CreditProfile/CreditProfile";
import * as S from "./CreditWrapper.style";
import useGetCredit from "@/hooks/queries/useGetCredit";
import { useQuery } from "@tanstack/react-query";

const CreditWrapper = ({ movieId }) => {
  const {
    data: credit,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => useGetCredit({ movieId }),
    queryKey: ["movieId", movieId],
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;

  const cast = credit.cast || [];
  const crew = credit.crew || [];

  return (
    <S.Container>
      <h2>감독 / 출연</h2>
      <S.Credit>
        {[...cast, ...crew].map((person, index) => (
          <CreditProfile key={`${person.id}-${index}`} {...person} />
        ))}
      </S.Credit>
    </S.Container>
  );
};

export default CreditWrapper;
