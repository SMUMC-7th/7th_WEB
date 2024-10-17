import * as S from "./Movie.style";
import axios from "axios";

function Movie(props) {
  const { myMovies, setMyMovies, id, title, poster_path } = props;

  const handleAddMovieTOList = async (movieid) => {
    try {
      const getListResponse = await axios.get(
        `https://api.themoviedb.org/3/list/${localStorage.getItem(
          "ListId"
        )}?language=ko&page=1`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },
          params: {
            list_id: localStorage.getItem("ListId"),
          },
        }
      );
      console.log("기존 리스트 목록 : ", getListResponse.data.items);
      //현재 리스트의 영화 id 목록
      const currentMovies = getListResponse.data.items.map((movie) => movie.id);
      if (currentMovies.includes(movieid)) {
        console.log("이미 있는 영화 ID 입니다. 영화 ID : ", movieid);
        return;
      } else {
        const response = await axios.post(
          `https://api.themoviedb.org/3/list/${localStorage.getItem(
            "ListId"
          )}/add_item`,
          {
            media_id: movieid,
          },
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
            params: {
              session_id: localStorage.getItem("SessionId"), // 유효한 session_id 확인 필요
            },
          }
        );
        console.log("영화 추가 성공 : ", response.data.items);
        setMyMovies((prevList) => {
          if (!Array.isArray(prevList)) {
            console.error("prevList is not an array:", prevList);
            return [id]; // 배열이 아니면 새 배열로 시작
          }
          return [...prevList, id]; // 배열이면 새 항목 추가
        });
        console.log("영화 추가 후 리스트 목록 : ", myMovies);
      }
    } catch (error) {
      console.error(
        "영화 추가 실패: ",
        error.response ? error.response.data : error.message
      );
    }
    //console.log(myMovies);
  };
  return (
    <S.Container onClick={() => handleAddMovieTOList(id)}>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <p>{title}</p>
    </S.Container>
  );
}

export default Movie;
