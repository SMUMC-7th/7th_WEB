import { LuDot } from "react-icons/lu";
// MovieInfo 컴포넌트
const MovieInfo = ({ movieData }: { movieData: any }) => {
  const backdropUrl = movieData?.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`
    : "";

  return (
    <div
      className="p-8 w-full text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${backdropUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl bg-black bg-opacity-0 p-10">
        <h1 className="text-3xl font-bold mt-6">{movieData?.title}</h1>
        <div className="mt-2 text-sm text-gray-400 flex items-center">
          평점 {movieData?.vote_average} <LuDot />
          {movieData?.release_date} <LuDot />
          {movieData?.runtime}분
        </div>
        <p className="mt-6 text-lg italic">{movieData?.tagline}</p>
        <p className="mt-2 text-sm w-[500px]">{movieData?.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
