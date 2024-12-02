import axiosInstance from "./axiosInstance";
import axios from "axios";

// 게시글 작성 post
const createPost = async ({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content: string;
  imageUrl: any;
}) => {
  const { data } = await axiosInstance.post("/posts", {
    title,
    content,
    imageUrl,
  });
  return data;
};

// 게시글 목록 조회 get
const getPostList = async () => {
  const { data } = await axiosInstance.get("/posts");

  return data;
};

// 게시글 단일 조회 get
const getPost = async ({ id }) => {
  const { data } = await axiosInstance.get(`/posts/${id}`);

  return data;
};

// 게시글 수정 patch
const patchPost = async ({
  id,
  title,
  content,
  imageUrl,
}: {
  id: string;
  title: string;
  content: string;
  imageUrl: any;
}) => {
  const { data } = await axiosInstance.patch(`/posts/${id}`, {
    title,
    content,
    imageUrl,
  });

  return data;
};

// 게시글 삭제 delete
const deletePost = async ({ id }) => {
  const { data } = await axiosInstance.delete(`/posts/${id}`);

  return data;
};

// 게시글 좋아요 수 증가 post

// 게시글 싫어요 수 증가 post

//로그인
const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data } = await axiosInstance.post(`/auth/login`, {
    email,
    password,
  });

  return data;
};
//회원가입

export { login, createPost, getPostList, getPost, patchPost, deletePost };
