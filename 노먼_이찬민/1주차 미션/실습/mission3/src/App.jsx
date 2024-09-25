import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div id="CardContainer">
      <header>coding cat</header>
      <img src="./javascriptforcarts.jpg" id="CardImage" />
      <div id="CardTitle">코딩하는 고양이</div>
      <div id="CardTitleMini">식육목 | 고양잇과 | 고양이</div>
      <div id="CardDescription">귀엽습니다</div>
      <button id="CardButton">즐겨보세요!</button>
      <footer>copyright @chanminLee</footer>
    </div>
  );
}

export default App;
