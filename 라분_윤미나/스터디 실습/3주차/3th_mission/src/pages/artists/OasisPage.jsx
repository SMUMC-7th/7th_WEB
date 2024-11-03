//import * as S from "./artistPage.style";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useEffect, useState } from "react";
import fetchData from "../../api/Axio";
import LoadingLottie from "../../components/Loding/Loding";
import ErrorLottie from "../../components/Error/Error";

const OasisPage = () => {
  const [artistData, setArtistData] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetchData("/artists/2DaxqgrOhkeH0fpeiQq2f4");
        setArtistData(response);
      } catch (error) {
        console.error("Error fetching artist data:", error);
        setHasError(true);
      }
    };
    fetchArtistData();
  }, []);

  if (hasError) {
    return <ErrorLottie />;
  }
  //console.log(artistData);
  return (
    <>
      {artistData ? (
        <ArtistCard
          name={artistData.data.name}
          url={artistData.data.images[0].url}
          followers={artistData.data.followers.total}
          genres={artistData.data.genres}
        />
      ) : (
        <LoadingLottie />
      )}
    </>
  );
};

export default OasisPage;
