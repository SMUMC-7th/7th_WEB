import { TPostQuery, TPostResponse } from '../type/post';
import { axiosInstance } from './axios-instance';

const getPostList = async ({ cursor, order, take, title }: TPostQuery): Promise<TPostResponse> => {
  const { data } = await axiosInstance.get(
    `/posts?cursor=${cursor}&order%5B%5D=${order}&take=${take}&title=${title}`,
  );
  return data;
};

export { getPostList };
