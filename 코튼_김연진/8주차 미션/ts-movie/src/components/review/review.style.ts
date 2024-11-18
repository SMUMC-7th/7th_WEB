import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 20px;
    flex-direction: column;
`;
const Title = styled.div`
    display: flex;
    color: white;
    margin: 25px 0px;
    font-size: 20px;
    font-weight: 600;
`;
const Text = styled.div`
    display: flex;
    color: white;
    margin-top: 25px;
    font-size: 15px;
`;
const Alert = styled.div`
    display: flex;
    text-align: center;
    width: 100%;
    height: 120px;
    font-size: 20px;
    color: white;
    align-items: center;
    justify-content: center;
`;

const ReviewList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
`;
const ReviewItem = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const Reviewer = styled.div`
    display: flex;
    color: white;
    width: auto;
`;
const ReviewContent = styled.div`
    display: flex;
    color: white;
    margin-left: 40px;
`;

const ReviewerInfo = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
`;

const ReviewRating = styled.div`
    display: flex;
`;
export {
    Container,
    Title,
    Text,
    Alert,
    ReviewList,
    ReviewItem,
    ReviewContent,
    Reviewer,
    ReviewerInfo,
    ReviewRating,
};
