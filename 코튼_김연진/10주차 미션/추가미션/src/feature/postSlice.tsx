import { create } from 'zustand';
import { TBlogPost } from '../type/type';

type TusePostStore = {
    postDetail: TBlogPost | null;
    setPostDetail: (data: TBlogPost) => void;
};

const usePostStore = create<TusePostStore>((set) => ({
    postDetail: null,
    setPostDetail: (data: TBlogPost) => set({ postDetail: data }),
}));

export default usePostStore;
