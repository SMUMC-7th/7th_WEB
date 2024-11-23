import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/todoSlice";
import * as S from "./InputTodo.style";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    dispatch(add(inputValue));
    setInputValue("");
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.TodoDate>
        <p>{formatDate(currentTime)}</p>
        <p>{formatTime(currentTime)}</p>
      </S.TodoDate>
      <h1>Todo List 🤙🏻</h1>
      <S.TodoInput>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <button type="submit">+</button>
      </S.TodoInput>
    </S.Container>
  );
};

export default Input;
