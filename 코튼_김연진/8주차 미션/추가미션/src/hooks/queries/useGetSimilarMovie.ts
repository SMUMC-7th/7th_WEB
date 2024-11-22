import { useQuery } from '@tanstack/react-query';
import { getSimilarMovie } from '../../apis/movie';
import { TMovieTotalResponse } from '../../apis/movie';

function useGetSimilarMovie(movieID: string) {
    return useQuery<TMovieTotalResponse>({
        queryKey: ['SimilarMoive', movieID],
        queryFn: () => getSimilarMovie(movieID),
        enabled: !!movieID,
    });
}

export default useGetSimilarMovie;
