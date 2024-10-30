import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
    //url을 넣으면 get요청으로 data를 불러와주는 훅
    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(url)
                setData(response);
            } catch(e){
                setIsError(true);
            } finally{
                setIsLoading(false);
            }
        }
        fetchData();
    }, [url]);
    return {data, isLoading, isError}


    // useEffect(() => {
    //     const getData = async () => {
    //         const data = await axiosInstance.get(url)
    //         setData(data);
    //     }
    //     getData()
    // }, []);
}

export default useCustomFetch;