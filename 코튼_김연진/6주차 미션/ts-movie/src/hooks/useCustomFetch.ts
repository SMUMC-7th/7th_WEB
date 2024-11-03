import { useEffect, useState } from 'react';
import { axiosInstance } from '../apis/axios-instance';

type FetchResult<T> = {
    data: T | null;
    isLoading: boolean;
    isError: boolean;
};

export interface MovieData {
    poster_path: string;
    title: string;
    vote_average: number;
    release_date: string;
    overview: string;
    tagline: string;
    runtime: number;
    id: number;
}

export interface FetchResponse {
    results: MovieData[];
    page: number;
    total_pages: number;
    total_results: number;
}
export interface CreditData {
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
}
const useCustomFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(url);
                setData(response.data);
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, isError };
};

export default useCustomFetch;
