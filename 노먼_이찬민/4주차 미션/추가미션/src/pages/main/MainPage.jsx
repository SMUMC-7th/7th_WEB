import { useEffect, useState } from "react";
import * as S from "./MainPage.style";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [buttonSize, setButtonSize] = useState("normal");
  const navigate = useNavigate();
  const nav = useNavigate();
  const [token, setToken] = useState("");
  const accessToken = localStorage.getItem("accessToken");

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
      nav("/");
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    localStorage.removeItem("accessToken");
  };

  const handleLogin = () => {
    const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    window.location.href = url;
  };

  const handleNavigate = (url) => {
    navigate("/" + url);
  };

  return (
    <S.Container>
      <h1>spotify open api</h1>
      {accessToken && (
        <S.ButtonBox size={buttonSize}>
          <button onClick={() => logout()}>logout</button>
          <button onClick={() => handleNavigate("user")}>유저</button>
          <button onClick={() => handleNavigate("artist")}>아티스트</button>
          <button onClick={() => handleNavigate("album")}>앨범</button>
        </S.ButtonBox>
      )}
      {!accessToken && (
        <S.ButtonBox size={buttonSize}>
          <button onClick={() => handleLogin()}>login</button>
        </S.ButtonBox>
      )}
    </S.Container>
  );
}

export default MainPage;
