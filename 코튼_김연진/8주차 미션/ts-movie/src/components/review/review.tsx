import * as S from './review.style';
import ClipLoader from 'react-spinners/ClipLoader';
import Error from '../error/error';
import useGetReview from '../../hooks/queries/useGetReview';
import renderStars from '../../utils/renderStars';
const Review = ({ movieId }: { movieId: string }) => {
    const { data, error, isLoading } = useGetReview(movieId);
    if (isLoading) {
        return (
            <S.Alert>
                <ClipLoader color="white" />
            </S.Alert>
        );
    }
    if (error) {
        return <Error></Error>;
    }
    return (
        <S.Container>
            <S.Title>리뷰</S.Title>
            {data?.results.length === 0 ? (
                <S.Text style={{ color: 'white' }}>리뷰가 아직 없습니다</S.Text>
            ) : (
                <S.ReviewList>
                    {data?.results.map((review) => (
                        <S.ReviewItem key={review.id}>
                            <S.ReviewerInfo>
                                <img
                                    src={
                                        review?.author_details?.avatar_path
                                            ? `https://image.tmdb.org/t/p/original${review?.author_details.avatar_path}`
                                            : 'https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo='
                                    }
                                    alt={`${review.author}'s avatar`}
                                />
                                <S.Reviewer>{review.author}</S.Reviewer>
                                <S.ReviewRating>
                                    {review?.author_details?.rating !== null
                                        ? renderStars(
                                              review?.author_details?.rating
                                          )
                                        : null}
                                </S.ReviewRating>
                            </S.ReviewerInfo>

                            <S.ReviewContent>{review.content}</S.ReviewContent>
                        </S.ReviewItem>
                    ))}
                </S.ReviewList>
            )}
        </S.Container>
    );
};

export default Review;
