import styled from "styled-components";
import Card from "./Card";
import { contents } from "../mocks/contents";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 10px 20px;
`;

const Cards = () => {
    return (
        <Container>
            {contents.map((item) => (
                <Card key={item.id} title={item.title} content={item.content} image={item.image} date={item.date} />
            ))}
        </Container>
    )
}

export default Cards;