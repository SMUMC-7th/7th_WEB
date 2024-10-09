import Button from "../Button/Button";
import Container from "./MainButton.style";

const Buttons = () => {
  return (
    <Container>
      <Button text="Logout"></Button>
      <Button text="유저"></Button>
      <Button text="아티스트"></Button>
      <Button text="앨범"></Button>
    </Container>
  );
};

export default Buttons;
