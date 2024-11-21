import { useQuery } from '@tanstack/react-query';
import { getMovieReviews } from '../../apis/movie';

function useGetReview(movieID: string) {
    return useQuery({
        queryKey: ['movieReview', movieID],
        queryFn: () => getMovieReviews(movieID || ''),
        enabled: !!movieID,
    });
}

export default useGetReview;
