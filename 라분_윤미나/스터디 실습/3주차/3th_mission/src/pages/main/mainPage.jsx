import { useEffect, useState } from "react";
import * as S from "./mainPage.style";

function MainPage() {
  const nav = useNavigate();
  const [token, setToken] = useState("");

  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = location.hash;
    let token = localStorage.getItem("accessToken");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      location.hash = "";
      localStorage.setItem("accessToken", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    localStorage.removeItem("accessToken");
  };

  return (
    <S.Container>
      <h1>spotify Open api</h1>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </S.Container>
  );
}

export default MainPage;
