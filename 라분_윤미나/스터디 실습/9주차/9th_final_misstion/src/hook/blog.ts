import { TLogin, TPost, TSignUp, TUpdatePostData } from "../type/Type.ts";
import axiosInstance from "../apis/axiosInstance.ts";

const PostLogin = async (data: TLogin) => {
  const response = await axiosInstance.post("/v1/auth/login", data);

  //console.log("로그인 response : ", response);
  return response.data;
};

const PostSignUp = async (data: TSignUp) => {
  const response = await axiosInstance.post("/v1/users", {
    email: data.email,
    password: data.password,
    role: data.role,
  });
  //console.log(" 회원가입 API 응답 : ", response.data);
  return response.data;
};

const PostLogout = async () => {
  try {
    const response = await axiosInstance.post("/v1/auth/logout");
    console.log("로그아웃 성공 : ", response);
  } catch (error) {
    console.log("로그아웃 에러", error);
  }
};

const PostWriting = async (data: TPost) => {
  const response = await axiosInstance.post("/v1/posts", {
    title: data.title,
    content: data.content,
    imageUrl: data.imageUrl,
  });
  //console.log("게시글 작성 API 응답 : ", response.data);
  return response.data;
};

const PostImage = async (url: string) => {
  const response = await axiosInstance.post("/v1/posts", {
    image: url,
  });
  //console.log("사전 이미지 업로드 API 응답 : ", response.data);
  return response.data;
};

const GetUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/v1/users/me");
    //console.log("UserInfo API 응답 : ", response);
    return response.data;
  } catch (error) {
    console.log("UserInfo API 연결 실패 에러", error);
  }
};

const GetUserList = async () => {
  try {
    const response = await axiosInstance.get("/v1/users");
    return response.data;
  } catch (error) {
    console.log("UserList API 연결 실패 에러", error);
  }
};

const GetPostList = async () => {
  try {
    const response = await axiosInstance.get("/v1/posts", {
      params: {
        take: 10,
      },
    });
    //console.log("글목록 가져오기 성공 : ", response);
    return response.data;
  } catch (error) {
    console.log("글목록 가져오기 실패 : ", error);
  }
};

const GetPostDetail = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/v1/posts/${id}`);
    //console.log("상세 게시글 가져오기 성공 : ", response);
    return response.data;
  } catch (error) {
    console.log("상세 게시글 가져오기 실패 : ", error);
  }
};

const DeletePost = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/v1/posts/${id}`);
    console.log(" 삭제하기 API 응답 : ", response.data);
    return response.data;
  } catch (error) {
    console.log("로그아웃 에러", error);
  }
};

const UpdatePostContent = async ({
  id,
  title,
  content,
  imageUrl,
}: TUpdatePostData) => {
  try {
    const { data } = await axiosInstance.patch(`/v1/posts/${id}`, {
      title,
      content,
      imageUrl,
    });
    return data;
  } catch (error) {
    console.log("게시글 수정 실패: ", error);
    throw error;
  }
};

const LikeUp = async (id: number) => {
  try {
    const response = await axiosInstance.post(`/v1/posts/${id}/like`);
    //console.log("좋아요 성공 : ", response);
    return response.data;
  } catch (error) {
    console.log("좋아요 실패 : ", error);
  }
};
const DisLikeUp = async (id: number) => {
  try {
    const response = await axiosInstance.post(`/v1/posts/${id}/dislike`);
    //console.log("싫어요 성공 : ", response);
    return response.data;
  } catch (error) {
    console.log("싫어요 실패 : ", error);
  }
};

export {
  PostLogin,
  PostSignUp,
  PostLogout,
  PostWriting,
  PostImage,
  GetUserInfo,
  GetUserList,
  GetPostList,
  GetPostDetail,
  DeletePost,
  UpdatePostContent,
  LikeUp,
  DisLikeUp,
};
