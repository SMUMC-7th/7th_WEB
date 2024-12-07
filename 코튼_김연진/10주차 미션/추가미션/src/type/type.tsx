export type TUser = {
    id: number;
    email: string;
    role: string;
};

export type TLogin = {
    email: string;
    password: string;
};

export type TSignup = {
    email: string;
    password: string;
    role: string;
};

export type TSignupNoRole = {
    email: string;
    password: string;
};

export type TPost = {
    title: string;
    content: string;
    imageUrl: string | null;
};

export type TGetPostParams = {
    cursor: string | null;
    title: string | null;
    order: string[] | null;
};

export type TBlogPost = {
    authorId: number;
    content: string;
    createdAt: string;
    dislikeCount: number;
    id: number;
    imageUrl: string | null;
    likeCount: number;
    likedUsers: string[];
    title: string;
    updatedAt: string;
};

export type TInfiniteCommonResponse<T> = {
    data: T;
    hasNextPage: boolean;
    nextCursor: string;
};

// 전체 게시글 조회
export type TRequestGetPosts = {
    title: string | null;
    cursor: string | null;
    order: string[];
};

export type Post = {
    title: string;
    content: string;
    updatedAt: string;
    version: number;
    likeCount: number;
    authorId: number;
    createdAt: string;
    imageUrl: null | string;
    dislikeCount: number;
    likedUsers: string[];
    id: number;
};

export type TResponseGetPosts = TInfiniteCommonResponse<Post[]>;

export type TPages = {
    data: Post[];
};
