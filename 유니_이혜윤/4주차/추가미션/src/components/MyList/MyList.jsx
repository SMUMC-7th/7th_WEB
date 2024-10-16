import { useState } from "react";
import * as S from "./MyList.style";
import axios from "axios";
import MovieList from "../MovieList/MovieList";

const MyList = () => {
  const [list, setList] = useState("");
  const [selectMovie, setSelectMovie] = useState([]);
  const session_id = localStorage.getItem("session_id");
  const list_id = localStorage.getItem("list_id");

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
  const handleAddedMovie = async (movie) => {
    const isAlreadyAdded = selectMovie.some(
      (selected) => selected.id === movie.id
    );
    if (!isAlreadyAdded) {
      await axios.post(
        `https://api.themoviedb.org/3/list/${list_id}/add_item?session_id=${session_id}`,
        {
          media_id: movie.id,
        },
        {
          headers: {
            Authorization: `Bearer ` + import.meta.env.VITE_MOVIE_TOKEN,
          },
        }
      );
      console.log(movie.id);
      setSelectMovie((prev) => [...prev, movie]);
      alert("영화가 추가되었습니다!");
    } else {
      alert("이미 추가된 영화입니다!");
    }
  };

  console.log(selectMovie);

  // 영화 삭제
  const handleRemoveMovie = async (movie) => {
    await axios.post(
      `https://api.themoviedb.org/3/list/${list_id}/remove_item?session_id=${session_id}`,
      {
        media_id: movie.id,
      },
      {
        headers: {
          Authorization: `Bearer ` + import.meta.env.VITE_MOVIE_TOKEN,
        },
      }
    );
    setSelectMovie((prev) => prev.filter((e) => e.id !== movie.id));
  };

  return (
    <S.Container>
      <MovieList onAddMovie={handleAddedMovie} />

      <h2>My MovieList</h2>
      <S.Button>
        <button onClick={handleCreate}>만들기</button>
        <button>가져오기</button>
        <button>리스트 삭제</button>
      </S.Button>

      <S.MovieList>
        {selectMovie.map((movie) => (
          <S.MovieWrapper
            key={movie.id}
            movie={movie}
            onClick={() => handleRemoveMovie(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </S.MovieWrapper>
        ))}
      </S.MovieList>
    </S.Container>
  );
};

export default MyList;
