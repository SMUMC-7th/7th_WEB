import React from "react";
import * as S from "./CategoryPage.style";
import { useNavigate } from "react-router-dom";
import { movieCategoriesENUM } from "../_shared/Shared";

function CategoryPage() {
  const navigate = useNavigate();
  const handleClick = (category) => {
    navigate(`/movies/${category}`);
  };
  return (
    <S.Container>
      <S.Title>카테고리</S.Title>
      <S.CategoryBox>
        <S.Category onClick={() => handleClick(movieCategoriesENUM.NOWPLAYING)}>
          <img src="/img1.jpg" />
          <span>현재 상영중인</span>
        </S.Category>
        <S.Category onClick={() => handleClick(movieCategoriesENUM.POPULAR)}>
          <img src="/img2.jpg" />
          <span>인기있는</span>
        </S.Category>
        <S.Category onClick={() => handleClick(movieCategoriesENUM.TOPRATED)}>
          <img src="/img3.jpg" /> <span>높은 평가를 받은</span>
        </S.Category>
        <S.Category onClick={() => handleClick(movieCategoriesENUM.UPCOMING)}>
          <img src="/img4.jpg" />
          <span>개봉 예정중인</span>
        </S.Category>
      </S.CategoryBox>
    </S.Container>
  );
}

export default CategoryPage;
