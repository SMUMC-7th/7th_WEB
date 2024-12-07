import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { getPostDetails, getPostList, postDislike, postLike, postPost } from '../apis/post';
import { TPostBody, TPostQuery, TPostResponse } from '../type/post';
import { useNavigate } from 'react-router-dom';

function useGetPostList(
  { cursor, order, title }: TPostQuery,
  queryOptions?: UseInfiniteQueryOptions<
    TPostResponse,
    DefaultError,
    InfiniteData<TPostResponse, number>,
    TPostResponse,
    QueryKey,
    number
  >,
) {
  return useInfiniteQuery({
    queryFn: () =>
      getPostList({
        cursor: cursor,
        order: order,
        title: title,
      }),
    queryKey: ['posts', order],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNextPage ? (cursor = lastPage.nextCursor) : null;
    },
    ...queryOptions,
  });
}

function useGetWritePost() {
  const navigate = useNavigate();
  const onSuccess = () => {
    alert('게시글이 발행되었습니다.');
    navigate('/');
  };

  return useMutation({
    mutationFn: (data: TPostBody) => postPost(data),
    mutationKey: ['writePost'],
    onSuccess: onSuccess,
    onError: (error) => console.log('게시물 발행 오류', error),
  });
}

function useGetPostDetails(id: number) {
  return useQuery({
    queryKey: ['postDetails', id],
    queryFn: () => getPostDetails(id),
  });
}

function usePostLike(id: number) {
  return useMutation({
    mutationFn: () => postLike(id),
    mutationKey: ['like', id],
    onSuccess: () => console.log('좋아요 수 증가'),
    onError: (error) => console.log('좋아요 요청 에러', error),
  });
}

function usePostDislike(id: number) {
  return useMutation({
    mutationFn: () => postDislike(id),
    mutationKey: ['unlike', id],
    onSuccess: () => console.log('싫어요 수 증가'),
    onError: (error) => console.log('싫어요 요청 에러', error),
  });
}

export { useGetPostList, useGetWritePost, useGetPostDetails, usePostLike, usePostDislike };
