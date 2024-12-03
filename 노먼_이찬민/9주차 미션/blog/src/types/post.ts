export type TPost = {
  id: number; // 게시물ID
  authorId: number; // 작성자 ID
  title: string; // 제목
  likeCount: number;
  dislikeCount: number;
  content: string;
  imageUrl: string | null; // 이미지 URL (null 허용)
  createdAt: string;
  updatedAt: string;
  version: number;
  likedUsers?: TUser[];
};

export type TUser = {
  id: number;
  email: string;
  role: string;
};
