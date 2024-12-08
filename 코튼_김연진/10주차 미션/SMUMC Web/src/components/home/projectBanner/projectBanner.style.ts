import styled from 'styled-components';
interface ContainerProps {
    islight: boolean;
}
const Container = styled.div<ContainerProps>`
    overflow-x: hidden;
    overflow-y: hidden;
    margin-top: 30px;
    width: 68.5rem;
    height: 25rem;

    .slick-list {
        height: auto;
        width: auto;
        background-color: ${(props) => (props.islight ? '#ffffff' : '#272727')};
        padding: 0;
    }
    .slick-slider {
        display: flex;
        justify-content: center;
        height: 100%;
    }
    .slick-slide {
        transition: transform 0.3s ease, opacity 0.3s ease;
        opacity: 0.5;
        transform: scale(0.7);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
            inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        position: relative;
        width: 25rem;
        height: 18rem;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    .slick-slide div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .slick-active {
        opacity: 1;
        transform: scale(1);
    }
    .slick-dots {
        bottom: 0px;
        position: absolute;

        @media (max-width: 970px) {
            display: none;
        }
    }
    .slick-dots li.slick-active button:before {
        color: var(--color-green-main);
        opacity: 0.8;
        @media (max-width: 970px) {
            display: none;
        }
    }
    .slick-dots li button:before {
        color: var(--color-grey-main);
        opacity: 0.8;
        @media (max-width: 970px) {
            display: none;
        }
    }
    .slick-dots li {
        transform: scale(1.5);
        @media (max-width: 970px) {
            display: none;
        }
    }
    .slick-track {
        width: 300px;
    }
    @media (max-width: 768px) {
        height: 20rem;

        .slick-list {
            height: 15rem;
            width: 20rem;
        }
        .slick-slide {
            width: 25rem;
            height: 12rem;
        }
    }
`;

export { Container };
