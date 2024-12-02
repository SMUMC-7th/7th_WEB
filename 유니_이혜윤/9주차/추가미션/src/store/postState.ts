import { create } from "zustand";

interface PostState {
  likes: Record<string, number>;
  dislikes: Record<string, number>;
  setLike: (postId: string) => void;
  setDislike: (postId: string) => void;
}

export const usePostStore = create<PostState>((set) => ({
  likes: {},
  dislikes: {},
  setLike: (postId: string) =>
    set((state: PostState) => ({
      likes: {
        ...state.likes,
        [postId]: (state.likes[postId] || 0) + 1,
      },
    })),

  setDislike: (postId: string) =>
    set((state: PostState) => ({
      dislikes: {
        ...state.dislikes,
        [postId]: (state.dislikes[postId] || 0) + 1,
      },
    })),
}));
