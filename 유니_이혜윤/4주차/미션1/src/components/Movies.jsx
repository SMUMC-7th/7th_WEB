import { MOVIES } from "../mocks/movies";
import Card from "@/components/Card/Card";
import * as S from "./Movies.style";

const Movies = () => {
  // console.log(MOVIES);

  return (
    <S.Container>
      {MOVIES.results.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </S.Container>
  );
};

export default Movies;
