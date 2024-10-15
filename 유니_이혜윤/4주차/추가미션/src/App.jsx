import "./App.css";
import * as M from "./pages/MainPage.style";
import MyList from "./components/MyList/MyList";
import { useState } from "react";
import axios from "axios";

function App() {
  const [token, SetToken] = useState("");
  const [session, SetSession] = useState("");

  // 요청 토큰 생성

  const getRequestToken = async () => {
    const token = await axios.get(
      `https://api.themoviedb.org/3/authentication/token/new`,
      {
        headers: {
          Authorization: `Bearer ` + import.meta.env.VITE_MOVIE_TOKEN,
        },
      }
    );
    SetToken(token);

    // 로컬스토리지에 저장
    localStorage.setItem("token", token.data?.request_token);
    location.href = `https://www.themoviedb.org/authenticate/${token.data?.request_token}?redirect_to=http://localhost:5173`;
  };

  console.log(token);

  // 세션 생성
  const getSessionToken = async () => {
    const token = localStorage.getItem("token");

    const session = await axios.post(
      `https://api.themoviedb.org/3/authentication/session/new`,
      {
        request_token: token,
      },
      {
        headers: {
          Authorization: `Bearer ` + import.meta.env.VITE_MOVIE_TOKEN,
        },
      }
    );
    SetSession(session);
    localStorage.setItem("session_id", session.data?.session_id);

    if (session.data?.session_id !== "") {
      alert("session_id를 얻었습니다!");
    }
  };

  console.log(session, "??");

  return (
    <M.Container>
      <M.Header>
        <h2>영화 장바구니 만들기</h2>
        <M.Button>
          <button onClick={getRequestToken}>token</button>
          <button onClick={getSessionToken}>session</button>
        </M.Button>
      </M.Header>
      <M.Content>
        <MyList />
      </M.Content>
    </M.Container>
  );
}

export default App;
