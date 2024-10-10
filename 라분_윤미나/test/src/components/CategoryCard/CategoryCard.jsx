import Container from "./CategoryCard.style";

const CategoryCardList = (props) => {
  const { url, text } = props;

  return (
    <Container>
      <img src={url}></img>
      <p>{text}</p>
    </Container>
  );
};

export default CategoryCardList;
