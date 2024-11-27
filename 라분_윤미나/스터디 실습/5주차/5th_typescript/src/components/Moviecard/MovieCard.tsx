import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MovieCard.style";
import { TMoviesDTO } from "../../type/movieType";

function MovieCard(props: TMoviesDTO) {
  const { id, release_date, title, poster_path } = props;
  const [isHover, setIsHover] = useState(false);
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/movies/${id}`);
  };

  return (
    <S.Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
    >
      {poster_path ? (
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
      ) : (
        <img src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.smu.ac.kr%2F_attach%2Fimage%2F2022%2F10%2FPLKqTefaQxGfcnMdjloJ.png&type=sc960_832" />
      )}

      {isHover && <S.Backdrop />}
      <div>
        <strong>{title}</strong>
      </div>
      <p>{release_date}</p>
    </S.Container>
  );
}

export default MovieCard;
