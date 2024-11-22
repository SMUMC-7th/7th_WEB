import ClipLoader from 'react-spinners/ClipLoader';
import Error from '../error/error';
import renderStars from '../../utils/renderStars';
import useGetReview from '../../hooks/queries/useGetReview';

const Review = ({ movieId }: { movieId: string }) => {
    const { data, error, isLoading } = useGetReview(movieId);
    if (isLoading) {
        return (
            <div className="flex text-center w-full h-[120px] text-[20px] text-white items-center justify-center">
                <ClipLoader color="white" />
            </div>
        );
    }
    if (error) {
        return <Error></Error>;
    }

    return (
        <div className="flex w-full m-[20px] flex-col">
            <div className="flex text-white mt-[25px] mb-[25px] text-[20px] font-semibold">
                리뷰
            </div>
            {data?.results.length === 0 ? (
                <div
                    className="flex text-white mt-[25px 0px] text-[20px] font-semibold"
                    style={{ color: 'white' }}
                >
                    리뷰가 아직 없습니다
                </div>
            ) : (
                <div className="flex flex-col w-full gap-[30px]">
                    {data?.results.map((review) => (
                        <div
                            className="flex gap-[5px] flex-col"
                            key={review.id}
                        >
                            <div className="flex w-full items-center gap-[10px]">
                                <img
                                    className="w-[30px] h-[30px] object-cover rounded-[50%]"
                                    src={
                                        review?.author_details?.avatar_path
                                            ? `https://image.tmdb.org/t/p/original${review?.author_details.avatar_path}`
                                            : 'https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo='
                                    }
                                    alt={`${review.author}'s avatar`}
                                />
                                <div className="flex text-white w-auto">
                                    {review.author}
                                </div>
                                <div className="flex">
                                    {review?.author_details?.rating !== null
                                        ? renderStars(
                                              review?.author_details?.rating
                                          )
                                        : null}
                                </div>
                            </div>

                            <div className="flex text-white ml-[40px]">
                                {review.content}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Review;
