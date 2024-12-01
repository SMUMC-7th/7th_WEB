import axiosInstance from "./axiosInstance";

export const getPost = async (postId: string) => {
  const response = await axiosInstance.get(`/v1/posts/${postId}`);
  return response.data;
};

export const deletePost = async (postId: string) => {
  await axiosInstance.delete(`/v1/posts/${postId}`);
};
