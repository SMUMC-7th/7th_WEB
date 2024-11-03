import { useParams } from "react-router-dom";
import useCustomFetch from "@/hooks/useCustomFetch";
import * as D from "./MovieDetail.style";
import CreditWrapper from "@/components/CreditWrapper/CreditWrapper";

const MovieDetail = () => {
  const { movieId } = useParams();
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch(`/movie/${movieId}?language=ko-KR`);
  // console.log(movie);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;

  return (
    <D.DetailContainer>
      <D.TopWrapper
        backgroundImage={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
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
