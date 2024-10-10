import { Container, TextContainer } from "./Card.style";
import { Link } from "react-router-dom";

const Card = ({ id, title, content, image, date }) => {
  return (
    <Link to={`/details/${id}`} style={{ textDecoration: "none" }}>
      <Container>
        <img src={image} alt={title} />
        <TextContainer>
          <h3>{title}</h3>
          <p>{content}</p>
          <span>{date}</span>
        </TextContainer>
      </Container>
    </Link>
  );
};

export default Card;
