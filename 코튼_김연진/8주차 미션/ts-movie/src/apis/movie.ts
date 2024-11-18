import { axiosMovieInstance } from './axios-instance';

export type genre = {
    id: number;
    name: string;
};

export type TMovieSingleResponse = {
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    overview: string;
    tagline: string;
    runtime: number;
    id: number;
    backdrop_path: string;
    genres: genre[];
    origin_country: string[];
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

export type TReviewResponse = {
    author: string;
    author_details: TReviewAuthorResponse[];
    content: string;
};
export type TReviewAuthorResponse = {
    avatar_paath: string | null;
    rating: number;
};

const getSingleMovie = async (
    movieId: string
): Promise<TMovieSingleResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieSingleResponse>(
        `/movie/${movieId}?language=ko-KR`
    );
    return data;
};

const getTotalMovie = async (page: number): Promise<TMovieTotalResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieTotalResponse>(
        `/movie/popular?language=ko-KR&page=${page}`
    );
    return data;
};

const getTrendingMovie = async (): Promise<TMovieTotalResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieTotalResponse>(
        `/trending/movie/week?language=ko-KR`
    );
    return data;
};

const getMovieCredit = async (
    movieId: string
): Promise<TMovieCreditResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieCreditResponse>(
        `/movie/${movieId}/credits?language=ko-KR`
    );
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

const getSimilarMovie = async (
    movieID: string
): Promise<TMovieTotalResponse> => {
    const { data } = await axiosMovieInstance.get<TMovieTotalResponse>(
        `/movie/${movieID}/similar?language=ko-KR&page=1`
    );
    return data;
};
const getMovieReviews = async (movieId: string): Promise<TReviewResponse> => {
    const { data } = await axiosMovieInstance.get(
        `/movie/${movieId}/reviews?&page=1`
    );
    console.log(data);
    return data;
};

const getMovieVideos = async (movieId: string) => {
    const { data } = await axiosMovieInstance.get(
        `/movie/${movieId}/videos?language=ko-KR`
    );
    return data;
};

export {
    getSingleMovie,
    getTotalMovie,
    getMovieCredit,
    getCategoryMovie,
    getSearchMovie,
    getTrendingMovie,
    getSimilarMovie,
    getMovieReviews,
    getMovieVideos,
};
