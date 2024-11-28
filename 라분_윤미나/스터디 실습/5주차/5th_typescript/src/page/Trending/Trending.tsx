import TrendingMovieCard from "../../components/TrendingMovie/TrendingMovieCard.tsx";
import useCustomFetch from "../../hooks/useCustomFetch";
import { TMoviesDTO, FetchResponse } from "../../type/movieType.ts";
import CardListSkeleton from "../../components/Moviecard/Skeleton/Card-List-Skeleton.tsx";
//import ErrorLottie from "../../components/Error/Error";

const TrendingPage = () => {
  const {
    data: movies,
    isLoading,
    isError,
  } = useCustomFetch<FetchResponse>(`/trending/movie/day?language=en-US`);

  if (isLoading) {
    return <CardListSkeleton number={20} />;
  }
  if (isError || !movies) {
    return <h1 className="">Error</h1>;
  }
  console.log("무비데이터: ", movies);
  return (
    <div className="flex flex-col mb-2">
      <h1 className="text-white my-5">Trending movies</h1>
      <div className="w-full flex flex-wrap gap-5">
        {movies?.results?.map((movie: TMoviesDTO) => (
          <TrendingMovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPage;
