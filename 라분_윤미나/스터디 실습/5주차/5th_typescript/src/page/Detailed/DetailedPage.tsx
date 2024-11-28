import { useParams } from "react-router-dom";
import MovieCredit from "../../components/MovieCredit/MovieCredit";
import MovieDetailed from "../../components/MovieDetailed/MovieDetailed";
import SimilarMovie from "../../components/SimilarMovie/SimilarMovie";
import { useState } from "react";

const DetailedPage = () => {
  const { movieId } = useParams();
  const id = Number(movieId);

  const [movieInfo, setMovieInfo] = useState<boolean>(true);

  return (
    <div className="flex flex-col ml-[50px]">
      <MovieDetailed id={id} />
      <hr className="border-['0.5px']" />
      <div className="flex justify-center gap-5 my-5 text-lg">
        <button
          className="border-none text-white bg-none"
          onClick={() => setMovieInfo(true)}
        >
          영화 정보
        </button>
        <button
          className="border-none text-white bg-none"
          onClick={() => setMovieInfo(false)}
        >
          관련 영화
        </button>
      </div>
      {movieInfo ? <MovieCredit id={id} /> : <SimilarMovie id={id} />}
    </div>
  );
};

export default DetailedPage;
