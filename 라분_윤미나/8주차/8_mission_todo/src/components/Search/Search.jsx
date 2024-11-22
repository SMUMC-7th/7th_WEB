import { useState } from "react";
import * as S from "./search.style";
import { useSearchParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  //const nav = useNavigate();
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("mq");

  useEffect(() => {
    const fetchTodos = async () => {
      if (searchQuery) {
        try {
          const response = await fetchGetTodoList(`/todo/title=${searchQuery}`);
          setTodos(response);
        } catch (error) {
          console.error("데이터 가져오기 실패 : ", error);
        }
      }
    };
    fetchTodos();
  }, [searchParams]);

  return (
    <S.Container>
      <S.Input
        placeholder="title을 입력해주세요."
        value={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={handleSearchTodoListWithKeyboard}
      />
      <S.Button onClick={handleSearchTodoList}>검색</S.Button>
    </S.Container>
  );
};

export default Search;
