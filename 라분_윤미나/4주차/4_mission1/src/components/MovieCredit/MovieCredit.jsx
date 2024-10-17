import * as S from "./MovieCredit.style.js";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import Director from "../Director/Director.jsx";

const MovieCredit = ({ id }) => {
  const {
    data: credit,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${id}/credits?language=ko`);

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  const creditData = credit.data;

  return (
    <S.Container>
      <h1>감독/출연</h1>
      <S.Article>
        {creditData?.cast.map((person) => (
          <Director key={person.id} {...person} />
        ))}
      </S.Article>
    </S.Container>
  );
};

export default MovieCredit;
