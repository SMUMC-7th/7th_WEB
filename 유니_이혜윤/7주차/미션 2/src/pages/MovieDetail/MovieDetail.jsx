import { useParams } from "react-router-dom";
// import useCustomFetch from "@/hooks/useCustomFetch";
import * as D from "./MovieDetail.style";
import CreditWrapper from "@/components/CreditWrapper/CreditWrapper";
import useGetMovieDetail from "@/hooks/queries/useGetMovieDetail";
import { useQuery } from "@tanstack/react-query";

const MovieDetail = () => {
  const { movieId } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movieDetail", movieId],
    queryFn: () => useGetMovieDetail({ movieId }),
  });

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;
  console.log(movie);

  return (
    <D.DetailContainer>
      <D.TopWrapper
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <h1>{movie.title}</h1>
        <h4>평점 {movie.vote_average}</h4>
        <h4>{movie.release_date}</h4>
        <h6>{movie.runtime}분</h6>
        <h3>{movie.tagline}</h3>
        <p>{movie.overview}</p>
      </D.TopWrapper>
      <D.BottomWrapper>
        <CreditWrapper movieId={movieId} />
      </D.BottomWrapper>
    </D.DetailContainer>
  );
};

export default MovieDetail;
