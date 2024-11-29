import { create } from "zustand";

interface Post {
  title: string;
  content: string;
  imageUrl: string;
}

interface PostStore {
  posts: Post[]; // 게시글 배열
  addPost: (post: Post) => void; // 게시글 추가 함수
  setPosts: (posts: Post[]) => void;
}

const usePostStore = create<PostStore>((set) => ({
  posts: [],
  addPost: (post) =>
    set((state) => ({
      posts: [...state.posts, post], // 새로운 게시글 추가
    })),
  setPosts: (posts) =>
    set(() => ({
      posts,
    })),
}));

export default usePostStore;
