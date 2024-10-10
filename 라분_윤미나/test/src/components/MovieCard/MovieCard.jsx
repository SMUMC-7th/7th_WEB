import { useState } from "react";
import * as S from "./MovieCard.style";
import PropTypes from "prop-types";

function MovieCard(props) {
  const { release_date, title, poster_path } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <S.Container
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        onError="this.src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.smu.ac.kr%2F_attach%2Fimage%2F2022%2F10%2FPLKqTefaQxGfcnMdjloJ.png&type=sc960_832'"
      />
      {isHover && <S.Backdrop />}
      <div>
        <strong>{title}</strong>
      </div>
      <p>{release_date}</p>
    </S.Container>
  );
}

MovieCard.PropTypes = {
  poster_path: PropTypes.string.isRequired,
};

export default MovieCard;
