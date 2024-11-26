import { useQuery } from "react-query";
import { axiosInstance } from "../apis/axios-instance";

interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number;
}

interface Review {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface ReviewsResponse {
  id: number;
  page: number;
  results: Review[];
}

const useGetReviews = (id: number) => {
  return useQuery<ReviewsResponse, Error>(["movieReviews", id], async () => {
    const { data } = await axiosInstance.get<ReviewsResponse>(
      `/movie/${id}/reviews?language=en-US`
    );
    return data;
  });
};

export default useGetReviews;
