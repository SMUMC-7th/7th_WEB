import { useQuery } from "react-query";
import { axiosInstance } from "../apis/axios-instance";
import { ReviewsResponse } from "../types/types";

const useGetReviews = (id: number) => {
  return useQuery<ReviewsResponse, Error>(["movieReviews", id], async () => {
    const { data } = await axiosInstance.get<ReviewsResponse>(
      `/movie/${id}/reviews?language=en-US`
    );
    return data;
  });
};

export default useGetReviews;
