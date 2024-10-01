import styled from "styled-components";
import ProfileImg from '../assets/ProfileImg.jpeg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px;
    padding: 10px;
    gap: 8px;

    border: 0.5px solid #ddd;
    border-radius: 5px;

    img {
        width: 100px;
        border-radius: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    h6 {
        color: #666;
    }

    button {
        border: none;
        border-radius: 30px;
        padding: 7px;

        color: white;
        background-color: #28a745;
        font-size: 10px;
        cursor: pointer;
    }
`;

const Profile = () => {
    return (
        <Container>
            <img src={ProfileImg} />
            <h3>아자핑</h3>
            <h6>아자아자 아자핑⭐️</h6>
            <button>오늘의 운세 🍀</button>
        </Container>
    )
}

export default Profile;