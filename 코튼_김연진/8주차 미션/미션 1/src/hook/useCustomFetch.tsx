import { useEffect, useState } from 'react';
import { axiosInstance } from '../apis/axios-instance';

type FetchResult<T> = {
    data: T | null;
    isLoading: boolean;
    isError: boolean;
};

export interface TodoData {
    title: string;
    content: string;
    id: number;
    checked: boolean;
}

export interface TotalTodoData {
    0: TodoData[];
    1: number;
}

const useCustomFetch = <T,>(url: string): FetchResult<T> => {
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
