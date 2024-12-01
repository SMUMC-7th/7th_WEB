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
    imageUrl?: string;
};

export type TGetPostParams = {
    cursor: number | null;
    title: string | null;
    order: string[] | null;
};

export type TBlogPost = {
    authorId: number;
    content: string;
    createdAt: string;
    dislikeCount: number;
    id: number;
    imageUrl: string;
    likeCount: number;
    likedUsers: string[];
    title: string;
    updatedAt: string;
};
