
import MovieCard from "../../components/movieCard/MovieCard.jsx";
import useCustomFetch from "../../hooks/useCustomFetch.js";
import * as S from "./MovieList.style.js"

const MoviesPage = ({category}) => {
    const {data: movies, isLoading, isError} = useCustomFetch(`/movie/${category}?language=ko-kr`);
  


   return <S.Container>
      {movies.data?.results.map((movie, _) => {
        return <MovieCard key={movie.id} movie={movie} />
      }
      )}
    </S.Container>
};

export default MoviesPage;


