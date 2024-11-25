import * as S from "./MovieDetailed.style.js";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import { TMovieDetails } from "../../mocks/movieType.js";

const MovieDetailed = ({ id }: { id: number }) => {
  const {
    data: movie,
    isLoading,
    isError,
  } = useCustomFetch<TMovieDetails>(`/movie/${id}?language=ko`);

  if (isLoading) {
    return <S.H1>로딩중...</S.H1>;
  }
  if (isError) {
    return <S.H1>Error</S.H1>;
  }

  if (!movie) {
    return <S.H1>데이터가 없음</S.H1>;
  }

  return (
    <section className="flex flex-col relative w-full h-300 overflow-hidden">
      <article className="w-600 absolute top-[20px] left-[20px] gap-10 text-white z-1">
        <p className="text-40">{movie.original_title}</p>

        <p className="text-14">
          평균 {movie.vote_average} . {movie.release_date} . {movie.runtime}분
        </p>

        <p className="text-14 mt-5">{movie.overview}</p>
      </article>
      <img
        className="w-500 right-[180px] rounded-2xl opacity-30 object-cover object-center absolute right-96"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      ></img>
    </section>
  );
};

export default MovieDetailed;
