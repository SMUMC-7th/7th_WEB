import { useInfiniteQuery } from '@tanstack/react-query';
import { getPosts } from '../../../apis/post';
import { queryKeys } from '../../../constants/common/querykey';
import { TGetPostParams } from '../../../type/type';

function useGetPosts({ title, cursor, order }: TGetPostParams) {
    return useInfiniteQuery({
        queryKey: [queryKeys.posts, order, title],
        queryFn: ({ pageParam = null }) =>
            getPosts({ title, cursor: pageParam, order }),
        getNextPageParam: (lastPage) => {
            return lastPage.hasNextPage ? lastPage.nextCursor : null;
        },
        initialPageParam: cursor,
    });
}

export default useGetPosts;
