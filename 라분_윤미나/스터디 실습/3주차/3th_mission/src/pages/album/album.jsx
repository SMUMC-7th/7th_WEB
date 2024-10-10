import { useEffect, useState } from "react";
import fetchData from "../../api/Axio";
import * as S from "./album.style";
import LoadingLottie from "../../components/Loding/Loding";
import ErrorLottie from "../../components/Error/Error";

const AlbumPage = () => {
  const [albumData, setAlbumData] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const albumIds =
          "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc";
        const response = await fetchData(`/albums?ids=${albumIds}`);
        setAlbumData(response.data.albums);
      } catch (error) {
        console.error("Error fetching album data:", error);
        setHasError(true);
      }
    };
    fetchAlbumData();
  }, []);

  if (hasError) {
    return <ErrorLottie />;
  }

  //console.log(albumData);
  return (
    <>
      {albumData ? (
        <div>
          {albumData.map((album) => (
            <S.Container key={album.id}>
              <div>
                <p>{album.name}</p>
                <img src={album.images[0]?.url} />
              </div>

              <ol>
                {album.tracks.items.map((track) => (
                  <li key={track.id}>{track.name}</li>
                ))}
              </ol>
            </S.Container>
          ))}
        </div>
      ) : (
        <LoadingLottie />
      )}
    </>
  );
};

export default AlbumPage;
