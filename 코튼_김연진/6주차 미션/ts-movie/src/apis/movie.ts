import { axiosMovieInstance } from './axios-instance';

export type TMovieSingleResponse = {
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    overview: string;
    tagline: string;
    runtime: number;
    id: number;
};

export type TMovieTotalResponse = {
    page: number;
    results: TMovieSingleResponse[];
    total_pages: number;
    total_results: number;
};

export type TMovieCreditResponse = {
    cast: {
        adult: boolean;
        cast_id: number;
        character: string;
        credit_id: number;
        gender: number;
        id: number;
        name: string;
        known_for_department: string;
        order: number;
        original_name: string;
        popularity: number;
        profile_path: string;
    }[];
    crew: {
        adult: boolean;
        job: string;
        credit_id: number;
        gender: number;
        id: number;
        name: string;
        department: string;
        original_name: string;
        popularity: number;
        profile_path: string;
    }[];
};

// TODO: GET: 영화 단일 데이터 불러오기
const getSingleMovie = async (
    movieId: string
): Promise<TMovieSingleResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieSingleResponse>(
        `/movie/${movieId}?language=ko-KR`
    );

    return data;
};

// TODO: GET: 영화 전체 데이터 불러오기
const getTotalMovie = async (page: number): Promise<TMovieTotalResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieTotalResponse>(
        `/movie/popular?language=ko-KR&page=${page}`
    );
    return data;
};

const getMovieCredit = async (
    movieId: string
): Promise<TMovieCreditResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieCreditResponse>(
        `/movie/${movieId}/credits?language=ko-KR`
    );
    console.log(data);
    return data;
};

const getCategoryMovie = async (
    category: string,
    page: number
): Promise<TMovieTotalResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieTotalResponse>(
        `/movie/${category}?language=ko-KR&page=${page}`
    );

    return data;
};

const getSearchMovie = async (
    mq: string,
    page: number
): Promise<TMovieTotalResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieTotalResponse>(
        `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=${page}`
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
