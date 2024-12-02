import axiosInstance from "./axiosInstance";

interface UpdatePostData {
  title?: string;
  content?: string;
  imageUrl?: string;
}

export const getPost = async (postId: string) => {
  const response = await axiosInstance.get(`/v1/posts/${postId}`);
  return response.data;
};

export const deletePost = async (postId: string) => {
  await axiosInstance.delete(`/v1/posts/${postId}`);
};

export const likePost = (postId: string) => {
  return axiosInstance.post(`/v1/posts/${postId}/like`);
};

export const dislikePost = (postId: string) => {
  return axiosInstance.post(`/v1/posts/${postId}/dislike`);
};

export const updatePost = (postId: string, updateData: UpdatePostData) => {
  return axiosInstance.patch(`/v1/posts/${postId}`, updateData);
};
