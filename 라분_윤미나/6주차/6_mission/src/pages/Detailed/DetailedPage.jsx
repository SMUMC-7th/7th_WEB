import { useParams } from "react-router-dom";
import MovieCredit from "../../components/MovieCredit/MovieCredit";
import MovieDetailed from "../../components/MovieDetailed/MovieDetailed";
import * as S from "./DetailedPage.style";

const DetailedPage = () => {
  const { movieId } = useParams();

  return (
    <S.Container>
      <MovieDetailed id={movieId} />
      <hr />
      <MovieCredit id={movieId} />
    </S.Container>
  );
};

export default DetailedPage;
