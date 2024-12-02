import useGetTrendingMovie from "../../hooks/useGetTrendingMovie";
import { Link } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

const MovieHome = () => {
  const { data, isLoading, isError } = useGetTrendingMovie();

  console.log(data);

  if (isLoading) return <div className="text-white">Loading...</div>;
  if (isError) return <div className="text-red-500">Error loading movies</div>;

  return (
    <div className="p-8 w-full bg-black min-h-screen">
      <h4 className="text-white text-xl mb-6">Trending Movies</h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.results.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-auto object-cover transition-transform duration-200 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white text-lg font-bold">{movie.title}</h4>
              <p className="text-gray-400 text-sm mt-2 flex items-center">
                평점 &nbsp;
                <IoIosStar />
                {movie.vote_average}
              </p>
              <p className="text-gray-400 text-sm mt-2">{movie.release_date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieHome;
