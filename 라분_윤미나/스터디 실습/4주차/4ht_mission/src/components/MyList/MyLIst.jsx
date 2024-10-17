import * as S from "./MyList.style";
import axios from "axios";
import MyListMovie from "../MyListMovie/MyListMovie";
import { useEffect } from "react";
import ErrorLottie from "../Error/Error";

const MyList = ({ myMovies, setMyMovies }) => {
  async function handleCreateList() {
    try {
      const response = await axios.post(
        "https://api.themoviedb.org/3/list",
        {
          name: "My Movie List",
          description: "This is my movie list",
          language: "ko",
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },

          params: {
            session_id: localStorage.getItem("SessionId"),
          },
        }
      );
      console.log(response);

      if (response.data.list_id) {
        console.log("list_id 생성");
        localStorage.setItem("ListId", response.data.list_id); // ListId 저장
      } else {
        <ErrorLottie />;
        console.error(
          "list_id를 찾을 수 없습니다. 상태 코드:",
          response.status
        );
      }
    } catch (error) {
      if (error.response) {
        <ErrorLottie />;
        console.error("에러 발생:", error.response.data); // 서버가 제공하는 자세한 오류 메시지
      } else {
        <ErrorLottie />;
        console.error("에러 발생:", error.message); // 기타 오류 메시지
      }
    }
  }

  async function handleDeleteList() {
    if (!localStorage.getItem("ListId")) {
      alert("리스트를 먼저 생성해 주세요.");
      return;
    }
    try {
      const response = await axios.delete(
        `https://api.themoviedb.org/3/list/${localStorage.getItem("ListId")}`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
          },

          params: {
            session_id: localStorage.getItem("SessionId"),
          },
        }
      );
      console.log("리스트삭제 정보 : ", response);

      if (response) {
        console.log("성공적으로 삭제되었습니다.");
        localStorage.removeItem("ListId"); // ListId 삭제
        setMyMovies("");
      } else {
        console.error("list_id를 찾을 수 없습니다.");
      }
    } catch (error) {
      if (error.response) {
        <ErrorLottie />;
        console.error("에러 발생:", error.response.data); // 서버가 제공하는 자세한 오류 메시지
      } else {
        <ErrorLottie />;
        console.error("에러 발생:", error.message); // 기타 오류 메시지
      }
    }
  }

  const handleCheckList = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/list/${localStorage.getItem(
        "ListId"
      )}?language=ko&page=1`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
        // params: {
        //   list_id: localStorage.getItem("ListId"),
        // },
      }
    );

    if (response.data && response.data.items) {
      console.log("현재 리스트 목록 : ", response.data.items);
      setMyMovies(response.data.items);
    } else {
      console.log("리스트에 영화가 없습니다.");
    }
  };

  useEffect(() => {
    handleCheckList();
  }, []);

  return (
    <S.Container>
      <h1>MY MovieList</h1>
      <S.Buttons>
        <button onClick={handleCreateList}>만들기</button>
        <button>가져오기</button>
        <button onClick={handleDeleteList}>리스트 삭제</button>
      </S.Buttons>
      {myMovies.length === 0 ? ( // myMovies가 빈 배열일 경우
        <p>아직 담은 영화가 없습니다.</p>
      ) : (
        // 그렇지 않을 경우
        <S.List>
          {myMovies?.map((movie) => (
            <MyListMovie key={movie.id} {...movie} setMyMovies={setMyMovies} />
          ))}
        </S.List>
      )}
    </S.Container>
  );
};

export default MyList;
