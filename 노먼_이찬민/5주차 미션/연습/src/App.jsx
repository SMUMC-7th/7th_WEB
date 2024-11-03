import { useState } from "react";
import Button from "./components/Button";

function App() {
  const ButtonSize = { 1: "small", 2: "medium", 3: "large" };

  return (
    <>
      <Button
        bcg={"white"}
        textColor={"skyblue"}
        fontSize={"15px"}
        borderRadius={"6px"}
        content={"Tabs"}
        size={ButtonSize[1]}
      ></Button>
      <Button
        bcg={"skyblue"}
        textColor={"blue"}
        fontSize={"15px"}
        borderRadius={"10px"}
        content={"Tabs"}
        size={ButtonSize[2]}
      ></Button>
      <Button
        bcg={"blue"}
        textColor={"white"}
        fontSize={"15px"}
        borderRadius={"14px"}
        content={"Tabs"}
        size={ButtonSize[3]}
      ></Button>
    </>
  );
}

export default App;
