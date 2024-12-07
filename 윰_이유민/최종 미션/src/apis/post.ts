import { TPostBody, TPostQuery, TPostResponse } from '../type/post';
import { axiosInstance } from './axios-instance';

const getPostList = async ({ cursor, order, title }: TPostQuery): Promise<TPostResponse> => {
  const params = new URLSearchParams();

  if (cursor) params.append('cursor', cursor.toString());
  if (order) {
    order.forEach((value) => params.append('order[]', value));
  }
  if (title) params.append('title', title);

  const { data } = await axiosInstance.get(`/posts?${params.toString()}`);
  const hasNextPage = data.nextCursor !== null;
  const nextCursor = hasNextPage ? data.nextCursor : null;

  return { data, nextCursor, hasNextPage };
};

const getImageUrl = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  const { data } = await axiosInstance.post(`/common/image`, formData);
  return data.imageUrl;
};

const postPost = async ({ title, content, imageUrl }: TPostBody): Promise<TPostResponse> => {
  const { data } = await axiosInstance.post(`/posts`, {
    title: title,
    content: content,
    imageUrl: imageUrl,
  });
  return data;
};

const getPostDetails = async (id: number) => {
  const { data } = await axiosInstance.get(`/posts/${id}`);
  return data;
};

const postLike = async (id: number) => {
  const { data } = await axiosInstance.post(`/posts/${id}/like`);
  return data;
};

const postDislike = async (id: number) => {
  const { data } = await axiosInstance.post(`/posts/${id}/dislike`);
  return data;
};

export { getPostList, getImageUrl, postPost, getPostDetails, postLike, postDislike };
