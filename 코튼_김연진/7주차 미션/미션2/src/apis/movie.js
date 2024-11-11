import { axiosMovieInstance } from './axios-instance';

// TODO: GET: 영화 단일 데이터 불러오기
const getSingleMovie = async (movieId) => {
    const { data } = await axiosMovieInstance.get(
        `/movie/${movieId}?language=ko-KR`,
    );

    return data;
};

// TODO: GET: 영화 전체 데이터 불러오기
const getTotalMovie = async (page) => {
    const { data } = await axiosMovieInstance.get(
        `/movie/popular?language=ko-KR&page=${page}`,
    );
    return data;
};

const getMovieCredit = async (movieId) => {
    const { data } = await axiosMovieInstance.get(
        `/movie/${movieId}/credits?language=ko-KR`,
    );
    console.log(data);
    return data;
};

const getCategoryMovie = async (category, page) => {
    const { data } = await axiosMovieInstance.get(
        `/movie/${category}?language=ko-KR&page=${page}`,
    );
    return data;
};

const getSearchMovie = async (mq, page) => {
    const { data } = await axiosMovieInstance.get(
        `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=${page}`,
    );
    return data;
};

export {
    getSingleMovie,
    getTotalMovie,
    getMovieCredit,
    getCategoryMovie,
    getSearchMovie,
};
