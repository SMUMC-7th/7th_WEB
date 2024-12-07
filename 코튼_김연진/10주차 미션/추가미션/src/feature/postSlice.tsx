import { create } from 'zustand';
import { TPost } from '../type/type';

type TusePostStore = {
    postDetail: TPost | null;
    setPostDetail: (data: TPost) => void;
};

const usePostStore = create<TusePostStore>((set) => ({
    postDetail: null,
    setPostDetail: (data: TPost) => set({ postDetail: data }),
}));

export default usePostStore;
