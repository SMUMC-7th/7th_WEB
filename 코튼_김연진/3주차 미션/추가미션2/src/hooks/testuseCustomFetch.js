import {useEffect, useState} from 'react';
import { testInstance } from '../apis/test-instance';

const useTestCustomFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await testInstance.get(url)
                setData(response)
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return {data, isLoading, isError}
}

export default useTestCustomFetch;