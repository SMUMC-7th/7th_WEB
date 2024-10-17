import React, { useState } from "react";
import * as S from "./MyMovieList.style";
import MovieList from "../moviesList/MovieList";
import { authInstance } from "../../api/axiosInstance";

function MyMovieList({ myMovies, handleClickMyCard }) {
  const handleCreateMyMovieList = async () => {
    const sessionId = localStorage.getItem("sessionId");
    const { data } = await authInstance.post("/3/list?" + sessionId, {
      name: "myList",
      description: "list.",
      language: "ko",
    });
    localStorage.setItem("listId", data.list_id);
  };

  const handleDeleteMyMovieList = async () => {
    const listId = localStorage.getItem("listId");
    if (!listId) {
      alert("현재 리스트가 없습니다!");
      return;
    }
    const { data } = await authInstance.delete(`/3/list/${listId}`);
    localStorage.setItem("listId", data.list_id);
  };

  return (
    <S.Container>
      <div>
        <button onClick={() => handleCreateMyMovieList()}>만들기</button>
        <button>가져오기</button>
        <button onClick={() => handleDeleteMyMovieList()}>리스트 삭제</button>
      </div>
      <MovieList
        type={"mine"}
        myMovies={myMovies}
        handleClickMyCard={handleClickMyCard}
      ></MovieList>
    </S.Container>
  );
}

export default MyMovieList;
