import { useState } from "react";
import * as S from "./MyList.style";
import axios from "axios";
import Movie from "../Movie/Movie";
import MovieList from "../MovieList/MovieList";

const MyList = () => {
  const [list, setList] = useState("");
  const [selectMovie, setSelectMovie] = useState([]);
  const session_id = localStorage.getItem("session_id");

  // 리스트 생성
  const handleCreate = async () => {
    const listData = await axios.post(
      `https://api.themoviedb.org/3/list?session_id=${session_id}`,
      {
        name: "This is my awesome test list.",
        description: "Just an awesome list.",
        language: "en",
      },
      {
        headers: {
          Authorization: `Bearer ` + import.meta.env.VITE_MOVIE_TOKEN,
        },
      }
    );
    setList(listData);
    alert("리스트 생성");

    console.log(list);
    localStorage.setItem("list_id", list.data?.list_id);
  };

  // 영화 선택되면 selectMovie에 추가
  const handleAddedMovie = (movie) => {
    const isAlreadyAdded = selectMovie.some(
      (selected) => selected.id === movie.id
    );
    if (!isAlreadyAdded) {
      setSelectMovie((prev) => [...prev, movie]);
      alert("영화가 추가되었습니다!");
    } else {
      alert("이미 추가된 영화입니다!");
    }
  };

  console.log(selectMovie);

  return (
    <S.Container>
      <MovieList onAddMovie={handleAddedMovie} />

      <h2>My MovieList</h2>
      <S.Button>
        <button onClick={handleCreate}>만들기</button>
        <button>가져오기</button>
      </S.Button>

      <S.MovieList>
        {selectMovie.map((movie) => (
          <Movie key={movie.id} movie={movie} onAddMovie={handleAddedMovie} />
        ))}
      </S.MovieList>
    </S.Container>
  );
};

export default MyList;
