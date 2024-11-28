import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async({category, pageParam}) => {
    // console.log(category, pageParam);
    
    const {data} = await axiosInstance.get(`/movie/${category}?language=ko-KRS&page=${pageParam}`)
    
    return data;
}

export {useGetMovies};