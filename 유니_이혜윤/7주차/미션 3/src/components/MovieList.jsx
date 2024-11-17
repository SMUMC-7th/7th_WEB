import Card from "@/components/Card/Card";
import { Container, ButtonStyle } from "./Movies.style";
import { useNavigate } from "react-router-dom";
import CardListSkeleton from "./Card/Skeleton/card-list-skeleton";
import useGetPaginationMovie from "@/hooks/queries/useGetPaginationMovie";
import { useState } from "react";

const MovieList = ({ category }) => {
  const navigate = useNavigate();

  // 현재 페이지 상태
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 페이지 데이터
  const { data, isPending, isError } = useGetPaginationMovie({
    category,
    page: currentPage,
  });

  const movies = data?.results || [];
  // console.log(movies);

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    window.scrollTo({ top: 0 }); // 스크롤 맨 위로 이동
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0 });
  };

  if (isPending) {
    return (
      <Container>
        <CardListSkeleton number={20} />
      </Container>
    );
  }

  if (isError) return <p>Error occurred 😭</p>;

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <>
      <Container>
        {movies?.map((movie) => {
          return (
            <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              <Card movie={movie} />
            </div>
          );
        })}
      </Container>
      <ButtonStyle>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전
        </button>
        <span>{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={data && currentPage >= data.total_pages}
        >
          다음
        </button>
      </ButtonStyle>
    </>
  );
};

export default MovieList;
