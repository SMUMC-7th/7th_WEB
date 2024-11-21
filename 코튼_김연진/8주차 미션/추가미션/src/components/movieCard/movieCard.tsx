import { useState } from 'react';
import NoneImg from '../../images/img.png';
import { TMovieSingleResponse } from '../../apis/movie.ts';
import { Link } from 'react-router-dom';
function MovieCard({
    poster_path,
    title,
    release_date,
    id,
}: TMovieSingleResponse) {
    const [ishovered, setIsHovered] = useState<boolean>(false);
    return (
        <Link
            className="w-[140px] h-[220px] relative no-underline"
            to={`/movies/${id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {poster_path != null ? (
                <img
                    className="w-[140px] h-[200px] object-cover"
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt="포스터 이미지"
                />
            ) : (
                <img src={NoneImg} alt="포스터 이미지" />
            )}
            {ishovered && (
                <div className="w-[140px] h-[200px] bg-black absolute top-0 left-0 opacity-50" />
            )}
            <div className="block w-[130px] text-white text-[12px] font-bold whitespace-nowrap text-ellipsis overflow-hidden">
                {title}
            </div>
            <div className="flex text-white text-[10px]">{release_date}</div>
        </Link>
    );
}

export default MovieCard;
