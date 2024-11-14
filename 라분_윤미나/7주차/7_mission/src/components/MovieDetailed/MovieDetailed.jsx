import * as S from "./MovieDetailed.style";
import fetchGetDetailed from "../../hooks/queries/useGetDetailed.js";
import { useQuery } from "@tanstack/react-query";

const MovieDetailed = ({ id }) => {
  const {
    data: movie,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => fetchGetDetailed({ id }),
    queryKey: ["movie", { id }],
    cacheTime: 10000,
    staleTime: 10000,
  });

  if (isPending) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  if (!movie) {
    return <h1 style={{ color: "white" }}>데이터가 없음</h1>;
  }
  console.log("무비 : ", movie);
  return (
    <S.Container>
      <S.Article>
        <h1>{movie?.original_title}</h1>
        <p>평균 {movie?.vote_average}</p>
        <p>{movie?.release_date}</p>
        <p>{movie?.runtime}분</p>
        <h2>
          <i>{movie?.tagline}</i>
        </h2>
        <p>{movie?.overview}</p>
      </S.Article>
      <S.Img
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
      ></S.Img>
    </S.Container>
  );
};

export default MovieDetailed;
