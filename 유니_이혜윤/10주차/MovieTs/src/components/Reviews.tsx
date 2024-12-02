import useGetReviews from "../hooks/useGetReviews";

interface ReviewsProps {
  movieId: number;
}

const Reviews: React.FC<ReviewsProps> = ({ movieId }) => {
  const { data, error, isLoading } = useGetReviews(movieId);

  console.log(data);

  if (isLoading) {
    return <div className="text-white">로딩 중...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500">오류가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <div className="h-full bg-black text-white p-4 flex flex-col">
      <h2 className="text-xl m-5">Review</h2>
      {data?.results.length === 0 ? (
        <p className="ml-5">리뷰가 없습니다 😥</p>
      ) : (
        <div className="flex-1 overflow-y-auto m-5">
          {data?.results.map((review) => (
            <div key={review.id} className="mb-4 flex items-start">
              {review.author_details.avatar_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                  alt={`${review.author}의 프로필`}
                  className="w-10 h-10 rounded-full mr-3"
                />
              ) : (
                <p className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-[15px] mr-3">
                  image
                </p>
              )}
              <div>
                <h3 className="text-[15px] pb-1">
                  {review.author} ( 평점 : {review.author_details.rating} )
                </h3>
                <p className="max-h-24 overflow-y-auto text-[12px] text-justify;">
                  {review.content}
                </p>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  원본 리뷰 보기
                </a>
                <hr className="border-gray-600" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
