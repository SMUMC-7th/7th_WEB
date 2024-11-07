import { useParams } from "react-router-dom";
import MovieCredit from "../../components/MovieCredit/MovieCredit";
import MovieDetailed from "../../components/MovieDetailed/MovieDetailed";
import * as S from "./DetailedPage.style";

const DetailedPage = () => {
  const { movieId } = useParams();
  const id = Number(movieId);
  return (
    <S.Container>
      <MovieDetailed id={id} />
      <hr />
      <MovieCredit id={id} />
    </S.Container>
  );
};

export default DetailedPage;
