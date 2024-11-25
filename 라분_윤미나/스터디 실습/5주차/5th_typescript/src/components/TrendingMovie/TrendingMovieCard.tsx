import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TMoviesDTO } from "../../mocks/movieType";

function TrendingMovieCard(props: TMoviesDTO) {
  const { id, release_date, title, backdrop_path, vote_average } = props;
  const [isHover, setIsHover] = useState(false);
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/movies/${id}`);
  };

  return (
    <div
      className="w-300 h-150 rounded-xl relative text-white"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
    >
      {backdrop_path ? (
        <img
          className="w-300 h-150 rounded-md"
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        />
      ) : (
        <img
          className="w-300 h-150"
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.smu.ac.kr%2F_attach%2Fimage%2F2022%2F10%2FPLKqTefaQxGfcnMdjloJ.png&type=sc960_832"
        />
      )}

      {isHover && (
        <div className="w-300 h-150 absolute top-0 left-0">
          <strong className="text-xl- absolute bottom-12 left-5">
            {title}
          </strong>
          <p className="text-sm absolute bottom-6 left-5">
            평균 {vote_average}
          </p>
          <p className="text-sm absolute bottom-1 left-5">
            개봉일 {release_date}
          </p>
        </div>
      )}
    </div>
  );
}

export default TrendingMovieCard;
