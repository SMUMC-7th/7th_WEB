import { axiosInstance } from './axiosInstance';
import { TPost, TGetPostParams } from '../type/type';

const cleanParams = (params: TGetPostParams) => {
    return Object.fromEntries(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(params).filter(([_, value]) => value !== null)
    );
};

const getPosts = async (params: TGetPostParams) => {
    const cleanedParams = cleanParams(params);
    const { data } = await axiosInstance.get('/v1/posts', {
        params: cleanedParams,
    });

    return {
        data: data?.data,
        nextCursor: data?.nextCursor,
        hasNextPage: data?.hasNextPage,
    };
};

const uploadPngImg = async (img: File) => {
    const formData = new FormData();
    formData.append('image', img);

    try {
        const { data } = await axiosInstance.post(
            '/v1/common/image',
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return data;
    } catch (error) {
        console.error('File upload failed:', error);
        throw error;
    }
};

const uploadPost = async (postdata: TPost) => {
    const { data } = await axiosInstance.post('/v1/posts', postdata);
    return data;
};

const getPostDetail = async (postId: number) => {
    const { data } = await axiosInstance.get(`/v1/posts/${postId}`);
    return data;
};

const addLike = async (postId: number) => {
    const { data } = await axiosInstance.post(
        `/v1/posts/${postId}/like`,
        postId
    );
    return data;
};

const addDisLike = async (postId: number) => {
    const { data } = await axiosInstance.post(
        `/v1/posts/${postId}/dislike`,
        postId
    );
    return data;
};

const deletePost = async (postId: number) => {
    const { data } = await axiosInstance.delete(`/v1/posts/${postId}`);
    return data;
};

const patchPost = async ({
    postId,
    postData,
}: {
    postId: number;
    postData: TPost;
}) => {
    const { data } = await axiosInstance.patch(`/v1/posts/${postId}`, postData);

    return data;
};
export {
    getPosts,
    uploadPngImg,
    uploadPost,
    getPostDetail,
    addLike,
    deletePost,
    patchPost,
    addDisLike,
};
