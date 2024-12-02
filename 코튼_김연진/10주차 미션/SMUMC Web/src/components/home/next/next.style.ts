import styled from 'styled-components';
interface isLightProps {
    islight: boolean;
}
interface isVisibleProps {
    isVisible: boolean;
}
const Container = styled.div<isVisibleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    height: auto;
    margin-bottom: 10px;
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transform: ${(props) =>
        props.isVisible ? 'translateY(-50px)' : 'translateY(0px)'};
    transition: opacity 1.5s ease, transform 0.5s ease;
`;

const Title = styled.div<isLightProps>`
    display: flex;
    color: ${(props) => (props.islight ? '#000000' : '#e0e0e0')};
    font-weight: var(--weight-title);
    font-size: var(--size-title);
    margin-bottom: 40px;
`;

const Imgs = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`;
const Card = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 300px;
    border-radius: 10px;
    align-items: center;
    background-color: #ffffff;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
        inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Img = styled.div`
    margin-top: 10px;
    width: 280px;
    height: 280px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    .firstImg,
    .secondImg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .firstImg {
        &:hover {
            opacity: 0;
        }
        z-index: 2;
    }
`;
const Cards = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;
const Subtitle = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 600;
`;
const Description = styled.div`
    display: flex;
    width: 80%;
    word-break: break-all;
    font-size: 15px;
    font-weight: 300;
`;
const Date = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 300;
`;
export {
    Container,
    Title,
    Imgs,
    Img,
    Card,
    Cards,
    Subtitle,
    Date,
    Description,
};
