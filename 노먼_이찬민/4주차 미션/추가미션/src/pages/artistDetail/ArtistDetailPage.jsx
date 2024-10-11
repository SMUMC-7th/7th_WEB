import React, { useEffect } from "react";
import * as S from "./ArtistDetailPage.style";
import { authInstance } from "../../api/axiosInstance";
import { useParams } from "react-router-dom";

function ArtistDetailPage() {
  const { id } = useParams();
  useEffect(() => {
    async function getArtistDetail() {
      const resApi = await authInstance.get("/artists/" + id);
      console.log(resApi.data);
    }
    getArtistDetail();
  }, []);

  return <S.Container></S.Container>;
}

export default ArtistDetailPage;
