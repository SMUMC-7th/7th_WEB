import useCustomFetch from "../../hooks/useCustomFetch.js";
import ErrorLottie from "../../components/Error/Error";
import LoadingLottie from "../../components/Loding/Loding.tsx";
import { TMovieReview, FetchResponse } from "../../mocks/movieType.ts";
import { FaCircleUser } from "react-icons/fa6";

const Review = ({ id }: { id: number }) => {
  const {
    data: reviews,
    isLoading,
    isError,
  } = useCustomFetch<FetchResponse>(`/movie/${id}/reviews?language=en-US`);

  console.log(reviews);
  if (isLoading) {
    return <LoadingLottie />;
  }
  if (isError) {
    return <ErrorLottie />;
  }

  return (
    <section className="flex flex-col">
      <h1 className="mt-9 mb-6">리뷰</h1>
      {reviews?.results.length === 0 ? (
        <h1 className="text-white">리뷰가 없습니다.</h1>
      ) : (
        <article className="flex flex-col gap-9">
          {reviews?.results.map((review: TMovieReview) => (
            <div key={review.id} className="flex">
              {review.author_details.avatar_path ? (
                <img
                  className="w-50 h-50 rounded-full"
                  src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`}
                />
              ) : (
                <FaCircleUser className="w-250 h-50" />
              )}

              <div className="flex flex-col gap-2">
                <h3>{review.author}</h3>
                {review.author_details.rating ? (
                  <p>평점 : {review.author_details.rating}점</p>
                ) : (
                  <p>평점이 없습니다.</p>
                )}

                <p>{review.content}</p>
              </div>
            </div>
          ))}
        </article>
      )}
    </section>
  );
};
export default Review;
