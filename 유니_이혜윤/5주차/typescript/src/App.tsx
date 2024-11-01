import Button from "./components/Button/Button";
import { AiFillApple } from "react-icons/ai";

function App() {
  return (
    <>
      <Button
        onClick={() => console.log("button 누름")}
        color="red"
        borderRadius="10px"
      >
        <AiFillApple />
      </Button>
      <Button
        onClick={() => console.log("button 누름")}
        color="white"
        borderRadius="5px"
      >
        <AiFillApple />
      </Button>
    </>
  );
}

export default App;
