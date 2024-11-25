import { useParams } from "react-router-dom";
import useGetMovieDetail from "../../hooks/useGetMovieDetail";
import useGetCredit from "../../hooks/useGetCredit";
import MovieInfo from "../../components/MovieInfo";
import Credits from "../../components/Credits";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: movieData,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useGetMovieDetail(id!);

  const {
    data: creditData,
    isLoading: isCreditLoading,
    isError: isCreditError,
  } = useGetCredit(id!);

  console.log(movieData);
  console.log(creditData);

  if (isMovieLoading || isCreditLoading) return <div>Loading...</div>;
  if (isMovieError || isCreditError)
    return <div className="text-red-500">Error</div>;

  return (
    <div className="w-full h-screen">
      <MovieInfo movieData={movieData} />
      {creditData ? (
        <Credits creditData={creditData} />
      ) : (
        <div className="text-red-500">Credit Error</div> // 기본 에러 메시지
      )}
    </div>
  );
};

export default MovieDetail;
