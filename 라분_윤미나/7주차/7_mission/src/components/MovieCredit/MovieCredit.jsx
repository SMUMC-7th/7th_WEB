import * as S from "./MovieCredit.style.js";
import fetchGetCredit from "../../hooks/queries/useGetCredit.js";
import Director from "../Director/Director.jsx";
import { useQuery } from "@tanstack/react-query";

const MovieCredit = ({ id }) => {
  const {
    data: credit,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => fetchGetCredit({ id }),
    queryKey: ["credit", { id }],
    cacheTime: 10000,
    staleTime: 10000,
  });

  if (isPending) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  console.log("크레딧 : ", credit);
  return (
    <S.Container>
      <h1>감독/출연</h1>
      <S.Article>
        {credit?.cast?.map((person) => (
          <Director key={person.id} {...person} />
        ))}
      </S.Article>
    </S.Container>
  );
};

export default MovieCredit;
