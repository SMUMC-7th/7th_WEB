// HomePage.js
import { useState, useEffect } from "react";
import { MovieList } from "../../components/movieList/MovieList";
import { MyMovieContainer } from "../../components/myMovieContainer/MyMovieContainer";
import * as S from "./HomePage.style";
import useFetchData from "../../hooks/useFetchData";

const HomePage = () => {
  const [myMovies, setMyMovies] = useState([]);
  const list_id = localStorage.getItem("list_id");

  // 리스트 details(영화 정보) 가져오기
  const { data: listData, isLoading, isError } = useFetchData(`/list/${list_id}?language=ko`, list_id);

  useEffect(() => {
    if(listData?.data?.items) {
      setMyMovies(listData.data.items);
    }
  }, [listData])

  // 영화 리스트에 추가 시 상태 업데이트
  const handleAddMovie = (newMovie) => {
    setMyMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <S.Container>
      <MovieList onAddMovie={handleAddMovie} />
      <MyMovieContainer myMovies={myMovies} setMyMovies={setMyMovies} />
    </S.Container>
  );
};

export default HomePage;
