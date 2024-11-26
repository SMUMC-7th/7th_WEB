import { DataNotFound } from '../components/NotFound';
import { SkeletonTrendingMovieCard } from '../components/TrendingMovieCard/SkeletonTrendingMovieCard';
import { TrendingMovieCard } from '../components/TrendingMovieCard/TrendingMovieCard';
import { useGetMovieList } from '../hooks/useGetData';

function Home() {
  const { data: movies, isLoading, isError } = useGetMovieList('popular');

  if (isError) {
    return <DataNotFound />;
  }

  return (
    <div className='w-full py-4 px-24 flex flex-col gap-5'>
      <h1 className='text-xl'>Trending Movies</h1>
      {isLoading ? (
        <SkeletonTrendingMovieCard number={20} />
      ) : (
        movies && (
          <div className='grid grid-cols-4 gap-4'>
            {movies.results.map((movie) => (
              <TrendingMovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default Home;
