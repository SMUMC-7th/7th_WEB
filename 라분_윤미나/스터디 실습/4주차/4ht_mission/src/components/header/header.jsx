import * as S from "./header.style";
import axios from "axios";

const Header = () => {
  const handleRQT = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      }
    );

    localStorage.setItem("requestToken", response.data?.request_token);

    window.location.href = `https://www.themoviedb.org/authenticate/${localStorage.getItem(
      "requestToken"
    )}?redirect_to=http://localhost:5173/`;
  };

  async function handleCreateSession() {
    const response = await axios.post(
      "https://api.themoviedb.org/3/authentication/session/new",
      {
        request_token: localStorage.getItem("requestToken"),
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      }
    );
    //console.log(response);

    localStorage.setItem("SessionId", response.data.session_id);
  }

  return (
    <S.Container>
      <h2>영화 장바구니 만들기</h2>
      <S.Btns>
        <button onClick={handleRQT}>token</button>
        <button onClick={handleCreateSession}>session</button>
      </S.Btns>
    </S.Container>
  );
};
export default Header;
