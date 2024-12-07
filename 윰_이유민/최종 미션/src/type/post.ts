import { TAuthBody } from './auth';

export type TPostQuery = {
  cursor?: number;
  order?: TPostOrderQuery[];
  title?: string;
  nowTrending?: TPostQuery;
};

export type TPostNav = 'now_trending' | 'recent' | 'popular';

export type TPostOrderQuery = 'likeCount_DESC' | 'likeCount_ASC' | 'id_ASC' | 'id_DESC';

export type TPostBody = {
  title?: string;
  content?: string;
  imageUrl?: string;
};

type TLikeUsers = {
  user: TAuthBody[];
};

export type TPost = {
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
  likeUsers?: TLikeUsers;
};

type TPostData = {
  data: TPost[];
};

export type TPostResponse = {
  data: TPostData;
  nextCursor: number;
  hasNextPage: boolean;
};

export type TPostDetails = {
  id: number;
  authorId: number;
  title: string;
  likeCount: number;
  dislikeCount: number;
  content: string;
  imageUrl: null;
  createdAt: string;
  updatedAt: string;
  version: number;
  author: {
    id: number;
    email: string;
    role: string;
  };
};
