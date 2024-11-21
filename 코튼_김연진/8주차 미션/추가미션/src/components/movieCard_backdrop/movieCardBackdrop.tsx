import { useState } from 'react';
import NoneImg from '../../images/img.png';
import { TMovieSingleResponse } from '../../apis/movie.ts';
import { Link } from 'react-router-dom';
function MovieCardBackdrop({
    backdrop_path,
    title,
    id,
    release_date,
    vote_average,
}: TMovieSingleResponse) {
    const [ishovered, setIsHovered] = useState<boolean>(false);
    return (
        <Link
            className="w-[270px] h-[140px] relative no-underline"
            to={`/movies/${id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {backdrop_path != null ? (
                <img
                    className="w-[270px] h-[140px] rounded-[10px] object-cover"
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt="포스터 이미지"
                />
            ) : (
                <img
                    className="w-[270px] h-[140px] rounded-[10px] object-cover"
                    src={NoneImg}
                    alt="포스터 이미지"
                />
            )}
            {ishovered && (
                <>
                    <div className="block w-[80%] text-white text-[20px] font-bold whitespace-nowrap overflow-hidden text-ellipsis absolute top-[70px] left-[10px] z-10">
                        {title}
                    </div>
                    <div className="flex text-white text-[13px] absolute top-[95px] left-[10px] z-10">
                        평균 ★{vote_average}
                    </div>
                    <div className="flex text-white text-[13px] absolute top-[115px] left-[10px] z-10">
                        개봉일 {release_date}
                    </div>
                    <div className="w-[270px] h-[140px] absolute top-0 left-0 bg-gradient-to-t from-black via-black/20 to-black/0 opacity-70 z-0"></div>
                </>
            )}
        </Link>
    );
}

export default MovieCardBackdrop;
