import MovieCard from "../../components/MovieCard/MovieCard";
import { Container } from "../../components/MovieList/MovieLIst.style";
import CardListSkeleton from "../../components/MovieCard/Skeleton/Card-List-Skeleton.jsx";
import * as S from "./movies.style.js";
import fetchGetPage from "../../hooks/queries/useGetPage.js";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MoviesPage = () => {
  const [page, setPage] = useState(1);
  const {
    data: movies,
    isPending,
    isError,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => fetchGetPage({ pageParam: page }),
    placeholderData: keepPreviousData,
    staleTime: 10000,
    cacheTime: 10000,
  });

  if (isPending) {
    return (
      <S.MovieContainer>
        <CardListSkeleton number={20} />;
      </S.MovieContainer>
    );
  }
  if (isError) {
    return (
      <S.TextContainer>
        <h2>에러발생</h2>
      </S.TextContainer>
    );
  }

  return (
    <div>
      <Container>
        {movies?.results?.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Container>
      <S.PageContainer>
        <S.Button
          onClick={() => {
            console.log("현제 페이지: ", page);
            setPage((old) => Math.max(old - 1, 1));
          }}
          disabled={page === 1}
        >
          이전
        </S.Button>
        <S.TextP>{page} 페이지</S.TextP>
        <S.Button
          onClick={() => setPage((old) => old + 1)}
          disabled={isPlaceholderData && !movies.hasMore}
        >
          다음
        </S.Button>
      </S.PageContainer>
    </div>
  );
};

export default MoviesPage;
