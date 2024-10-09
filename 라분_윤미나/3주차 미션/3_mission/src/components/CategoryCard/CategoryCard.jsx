//import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "./CategoryCard.style";

const CategoryCard = (props) => {
  const { url, text, path } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <Container onClick={handleClick}>
      <img src={url}></img>
      <p>{text}</p>
    </Container>
  );
};

export default CategoryCard;
