import Card from "@/components/Card/Card";
import { Container } from "./Movies.style";
// import useCustomFetch from "@/hooks/useCustomFetch";
import { useNavigate } from "react-router-dom";
import useGetMovies from "../hooks/queries/useGetMovies";
import { useQuery } from "@tanstack/react-query";
import CardListSkeleton from "./Card/Skeleton/card-list-skeleton";

const MovieList = ({ category }) => {
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => useGetMovies({ category, pageParam: 1 }),
    queryKey: ["movie category", category],
    cacheTime: 10000, // 10초동안 fresh 상태로 유지
    staleTime: 10000,
  });

  console.log(movies?.results);

  // isPending: 데이터를 불러오는 중입니다.
  // isLoading: 데이터를 불러오는 중이거나, 재시도 중일때 true

  if (isLoading) {
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
    <Container>
      {movies.results?.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          <Card movie={movie} />
        </div>
      ))}
    </Container>
  );
};

export default MovieList;
