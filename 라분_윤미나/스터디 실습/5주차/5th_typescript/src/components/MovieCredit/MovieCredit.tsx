import * as S from "./MovieCredit.style.ts";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import Director from "../Director/Director.tsx";
import { TCredit, TCreditCast } from "../../mocks/movieType.js";

const MovieCredit = ({ id }: { id: number }) => {
  const {
    data: credit,
    isLoading,
    isError,
  } = useCustomFetch<TCredit>(`/movie/${id}/credits?language=ko`);

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError || !credit) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  //const creditData = credit.data;

  return (
    <S.Container>
      <h1>감독/출연</h1>
      <S.Article>
        {credit.cast.map((person: TCreditCast) => (
          <Director key={person.id} {...person} />
        ))}
      </S.Article>
    </S.Container>
  );
};

export default MovieCredit;
