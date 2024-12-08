import { useQuery } from '@tanstack/react-query';
import { getMovieVideos } from '../../apis/movie';

function useGetMovieVedio(movieID: string) {
    return useQuery({
        queryKey: ['YouTubemovieId', movieID],
        queryFn: () => getMovieVideos(movieID || ''),
        enabled: !!movieID,
    });
}

export default useGetMovieVedio;
