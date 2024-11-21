import MovieCard from '../movieCard/movieCard';
import ClipLoader from 'react-spinners/ClipLoader';
import Error from '../error/error';
import useGetSimilarMovie from '../../hooks/queries/useGetSimilarMovie';

const SimilarMovie = ({ id }: { id: string }) => {
    const { data, error, isLoading } = useGetSimilarMovie(id);
    if (error) {
        return <Error></Error>;
    }
    if (isLoading) {
        return (
            <div className="flex text-center w-full h-[400px] text-[20px] text-white items-center justify-center">
                <ClipLoader color="white" />
            </div>
        );
    }
    return (
        <div className="flex text-white w-full flex-col mb-[30px]">
            <div className="flex text-white text-[20px] w-[95%] ml-[30px] mt-[30px] self-center">
                비슷한 영화
            </div>
            <div className="mt-[30px] flex gap-[20px] w-full flex-wrap text-white justify-center">
                {data?.results.map((movie) => (
                    <MovieCard {...movie}></MovieCard>
                ))}
            </div>
        </div>
    );
};

export default SimilarMovie;
