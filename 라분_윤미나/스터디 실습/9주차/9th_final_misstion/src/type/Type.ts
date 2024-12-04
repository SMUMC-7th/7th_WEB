export type TLogin = {
  email: string;
  password: string;
};
export type TSignUp = {
  email: string;
  password: string;
  role: string;
};

export type TPost = {
  title: string;
  content: string;
  imageUrl?: string | null;
};

export type TPostList = {
  data: TPostListData[];
  nextCursor: string;
  hasNextPage: boolean;
};
export type TPostListData = {
  id: number;
  authorId: number;
  title: string;
  likeCount: number;
  dislikeCount: number;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type TUserInfoResponse = {
  id: number;
  email: string;
  password: string;
  refreshToken: string;
  role: string;
};

export type TPostWritingResponse = {
  id: number;
  authorId: number;
  title: string;
  likeCount: number;
  dislikeCount: number;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  version: number;
};

export type TPostDetailedResponse = {
  author: {
    email: string;
    id: number;
    role: string;
  };
  authorId: number;
  content: string;
  createdAt: string;
  dislikeCount: number;
  id: number;
  imageUrl: string | null;
  likeCount: number;
  title: string;
  updatedAt: string;
  version: number;
};

export type TUpdatePostData = {
  id: number;
  title: string;
  content: string;
  imageUrl?: string | null;
};

export type TUserInfo = {
  email: string;
  id: number;
  role: string;
};
