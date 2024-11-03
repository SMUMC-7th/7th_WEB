import React, { useEffect, useState } from "react";
import * as S from "./ArtistDetailPage.style";
import { authInstance } from "../../api/axiosInstance";
import { useParams } from "react-router-dom";
import useMovies from "./../../../../미션1/hooks/useMovies";

function ArtistDetailPage() {
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  useEffect(() => {
    async function getArtistDetail() {
      const resApi = await authInstance.get("/artists/" + artistId);
      setArtist(resApi.data);
    }
    getArtistDetail();
  }, []);
  console.log(artist);

  return (
    <S.Container>
      {artist && (
        <S.Card>
          <h1>{artist.name}</h1>
          {artist.images.length ? (
            <img src={artist.images[0].url} />
          ) : (
            <img src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"></img>
          )}
          <p>genres : {artist.genres}</p>
        </S.Card>
      )}
    </S.Container>
  );
}

export default ArtistDetailPage;
