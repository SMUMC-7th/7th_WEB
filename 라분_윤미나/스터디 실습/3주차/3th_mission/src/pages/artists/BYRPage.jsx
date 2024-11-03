import ArtistCard from "../../components/ArtistCard/ArtistCard";
import { useEffect, useState } from "react";
import fetchData from "../../api/Axio";
import LoadingLottie from "../../components/Loding/Loding";
import ErrorLottie from "../../components/Error/Error";

const BYRPage = () => {
  const [artistData, setArtistData] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetchData("/artists/6dhfy4ByARPJdPtMyrUYJK");
        setArtistData(response.data);
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
          name={artistData.name}
          url={artistData.images[0].url}
          followers={artistData.followers.total}
          genres={artistData.genres}
        />
      ) : (
        <LoadingLottie />
      )}
    </>
  );
};

export default BYRPage;
