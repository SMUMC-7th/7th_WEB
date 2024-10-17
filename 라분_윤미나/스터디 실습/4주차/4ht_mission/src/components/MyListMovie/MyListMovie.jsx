import * as S from "./MyListMovie.style";
import axios from "axios";

function MyListMovie(props) {
  const { setMyMovies, id, title, poster_path } = props;

  const handleRemoveMovieTOList = async (movieid) => {
    try {
      const response = await axios.post(
        `https://api.themoviedb.org/3/list/${localStorage.getItem(
          "ListId"
        )}/remove_item`,
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
      console.log("영화 삭제 성공 : ", response);
      setMyMovies((prevList) =>
        prevList.filter((movie) => movie.id !== movieid)
      );
    } catch (error) {
      console.error(
        "영화 삭제 실패: ",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <S.Container onClick={() => handleRemoveMovieTOList(id)}>
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title}
      />
      <p>{title}</p>
    </S.Container>
  );
}

export default MyListMovie;
