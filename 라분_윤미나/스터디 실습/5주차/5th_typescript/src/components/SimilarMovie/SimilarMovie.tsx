import useCustomFetch from "../../hooks/useCustomFetch.js";
import ErrorLottie from "../Error/Error";
import CardListSkeleton from "../Moviecard/Skeleton/Card-List-Skeleton";
import { FetchResponse, TMoviesDTO } from "../../type/movieType.js";
import MovieCard from "../Moviecard/MovieCard";

const SimilarMovie = ({ id }: { id: number }) => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<FetchResponse>(`/movie/${id}/similar?language=ko&page=1`);

  console.log("데이터: ", movies);

  if (isLoading) {
    return <CardListSkeleton number={20} />;
  }
  if (isError) {
    return (
      <div className="mt-8">
        <ErrorLottie />
      </div>
    );
  }
  return (
    <div className="flex flex-col h-300 ">
      <h1 className="text-white mb-9">비슷한 영화</h1>
      <div className="w-full flex flex-wrap gap-5 ">
        {movies?.results?.map((movie: TMoviesDTO) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovie;
