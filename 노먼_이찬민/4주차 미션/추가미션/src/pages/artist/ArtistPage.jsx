import { useEffect, useState } from "react";
import * as S from "./ArtistPage.style";
import { authInstance } from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

function ArtistPage() {
  const navigate = useNavigate();
  const ARTISTS = [
    {
      name: "한요한",
      id: "4KMXeFyYAcYrK2bOB5XCRg",
    },
    {
      name: "스키니브라운",
      id: "0E0fq98DMHhkAgiXWpCViX",
    },
  ];

  return (
    <S.Container>
      <h1>원하는 아티스트를 클릭하세요!</h1>
      <S.ArtistBox>
        {ARTISTS.map((artist) => (
          <div key={artist.id} onClick={() => navigate("/artist/" + artist.id)}>
            {artist.name}
          </div>
        ))}
      </S.ArtistBox>
    </S.Container>
  );
}

export default ArtistPage;
