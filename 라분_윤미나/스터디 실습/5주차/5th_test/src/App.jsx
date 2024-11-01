import "./App.css";
import Button from "./components/button/button";
function App() {
  return (
    <div>
      <Button
        color={"blue"}
        background={"skyblue"}
        radius={"10px"}
        height={"25px"}
      />
      <Button
        color={"white"}
        background={"blue"}
        radius={"10px"}
        height={"25px"}
      />
    </div>
  );
}

export default App;
