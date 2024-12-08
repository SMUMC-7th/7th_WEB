import { useQuery } from '@tanstack/react-query';
import { getMovieCredit } from '../../apis/movie';
import { TMovieCreditResponse } from '../../apis/movie';

function useGetCredit(movieID: string) {
    return useQuery<TMovieCreditResponse>({
        queryKey: ['movieCredit', movieID],
        queryFn: () => getMovieCredit(movieID || ''),
        enabled: !!movieID,
    });
}

export default useGetCredit;
