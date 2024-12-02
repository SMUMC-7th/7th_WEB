import { TAuthBody } from './auth';

export type TPostQuery = {
  cursor: number;
  order: TPostOrderQuery[];
  take: number;
  title: string;
};

export type TPostOrderQuery = 'likeCount_DESC' | 'likeCount_ASC' | 'id_ASC';

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

export type TPostResponse = {
  data: TPost[];
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
