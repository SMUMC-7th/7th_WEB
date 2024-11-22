import ClipLoader from 'react-spinners/ClipLoader';
import Error from '../error/error.jsx';
import useGetSingleMovie from '../../hooks/queries/useGetSingleMovie';

interface Props {
    movieId: string;
}

function MovieInfoCard(props: Props) {
    const { movieId } = props;
    const { data, error, isLoading } = useGetSingleMovie(movieId);

    if (error) {
        console.log('데이터가 없습니다');
        return <Error />;
    }
    if (isLoading) {
        return (
            <div className="sc:flex sc:items-center sc:justify-center sc:w-full sc:h-[300px] sc:text-white">
                <ClipLoader />
            </div>
        );
    }
    if (!data) {
        console.log('데이터가 없습니다');
        return <Error />;
    }

    const {
        title,
        vote_average,
        release_date,
        overview,
        tagline,
        runtime,
        backdrop_path,
        poster_path,
        genres,
        origin_country,
    } = data;

    let backgroundImageUrl = '';
    if (backdrop_path === null) {
        backgroundImageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
    } else {
        backgroundImageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
    }

    const formattedReleaseDate = release_date?.slice(0, 4);
    const formattedRuntime = Math.floor(runtime / 60);
    const formattedRuntimeMin = runtime - formattedRuntime * 60;

    return (
        <div className="sc:relative sc:w-full sc:h-[300px] sc:bg-cover sc:bg-center sc:border-b sc:border-[#202020]">
            <img
                src={backgroundImageUrl}
                alt=""
                className="sc:absolute sc:right-0 sc:w-[50%] sc:h-[300px] sc:object-cover relative w-full object-cover h-[300px]"
            />
            <div className="sc:absolute sc:top-0 sc:left-0 sc:w-full sc:h-[300px] sc:bg-gradient-to-r sc:from-black sc:to-transparent sc:opacity-70" />
            <div className="sc:relative sc:z-2 sc:w-[45%] sc:h-[300px] sc:flex sc:flex-col sc:justify-center sc:gap-[3px] sc:ml-[20px] flex-col justify-center gap-[3px] mt-[10px]">
                <h2 className="sc:text-white sc:text-3xl sc:font-bold sc:truncate ">
                    {title}
                </h2>
                <div className="flex gap-2 text-white flex-wrap">
                    <span>평균 {vote_average}</span>·
                    <span>{formattedReleaseDate}</span>·
                    <span>
                        {formattedRuntime}시간 {formattedRuntimeMin}분
                    </span>
                    ·<span>{genres?.[0]?.name}</span>·
                    <span>{origin_country?.[0]}</span>
                </div>
                <div className="text-xl text-white italic my-2">{tagline}</div>
                <p className="text-[#babac1] text-sm max-h-[150px] overflow-hidden text-ellipsis">
                    {overview}
                </p>
            </div>
        </div>
    );
}

export default MovieInfoCard;
