import React from "react";
import * as S from "./MovieListSkeleton.style";

const MovieListSkeleton = () => {
  // Array 생성자 함수
  const mock = [...new Array(20)].map((_, i) => i);
  return (
    <S.Container>
      {mock.map((item, idx) => (
        <S.CardBox key={idx}></S.CardBox>
      ))}
    </S.Container>
  );
};

export default MovieListSkeleton;
