import MovieCardBackdrop from '../../components/movieCard_backdrop/movieCardBackdrop';
import { TMovieSingleResponse } from '../../apis/movie';
import Error from '../../components/error/error';
import CardListSkeleton from '../../components/movieCard_backdrop/Skeleton/card-list-skeleton';
import useGetTrendingMovies from '../../hooks/queries/useGetTrendingMovies';

const HomePage = () => {
    const { data, error, isLoading, isPending } = useGetTrendingMovies();

    if (isLoading || isPending) {
        return (
            <div className="flex flex-col items-center border-t border-solid border-[#202020]">
                <div className="flex text-white text-xl w-[90%] mt-5">
                    Trending movies
                </div>
                <div className="flex m-5 gap-5 flex-wrap justify-center">
                    <CardListSkeleton number={20}></CardListSkeleton>
                </div>
            </div>
        );
    }

    if (!data || error) {
        console.log('데이터가 없습니다');
        return <Error />;
    }
    return (
        <div className="flex flex-col items-center border-t border-solid border-[#202020]">
            <div className="flex text-white text-xl w-[90%] mt-5">
                Trending movies
            </div>
            <div className="flex m-5 gap-5 flex-wrap justify-center">
                {data.results.map((movie: TMovieSingleResponse) => (
                    <MovieCardBackdrop key={movie.id} {...movie} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
