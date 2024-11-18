import { useContext, useEffect } from "react";
import "./todo.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { todoContext } from "../../context/TodoContext";
import fetchGetTodoList from "../../hooks/queries/useGetTodoList";
import fetchUpdateTodoList from "../../hooks/queries/useUpdateTodoList";
import { useNavigate, useSearchParams } from "react-router-dom";

const TodoPage = () => {
  const {
    todos,
    setTodos,
    setText,
    setTitle,
    search,
    setSearch,
    searchChecked,
    setSearchChecked,
    editingId,
    setEditingId,
    editTitle,
    setEditTitle,
    editText,
    setEditText,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useContext(todoContext);

  const nav = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchTitle = searchParams.get("title") || "";

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchTodo = (e) => {
    setSearchChecked(e.target.value.length > 0);
    setSearch(e.target.value);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    setSearchParams({ title: searchTitle });
  };

  const schema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    addTodo(data.title, data.content);
    reset();
  };

  const handleClick = (id) => (e) => {
    if (e.target.type === "checkbox") {
      e.stopPropagation(); // 이중 차단
      return; // 체크 박스 클릭 시 함수 실행을 중지
    }
    nav(`/todo/${id}`);
  };

  const handleTodoListInquiry = async () => {
    try {
      const data = await fetchGetTodoList("/todo");
      console.log("Fetched Todos:", data);
      setTodos(data[0]); // 서버에서 가져온 데이터를 todos 리스트로 업데이트
    } catch (error) {
      console.error("데이터 조회 실패:", error);
    }
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(savedTodos);
    }
    handleTodoListInquiry();

    return () => {
      localStorage.setItem("todos", todos);
    };
  }, [searchTitle]);

  useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

  console.log("todos:", todos);
  // if (!todos || !todos[0]) {
  //   return <div>Loading...</div>; // 로딩 중이거나 데이터가 없는 경우
  // }

  const todoList = searchChecked ? filteredTodos : todos;

  return (
    <div className="center">
      <h5>todo 검색창</h5>
      <form onSubmit={handleSearchSubmit} className="SearchForm">
        <input
          value={search}
          onChange={handleSearchTodo}
          placeholder={"  title 검색창"}
          className="SearchForm_Input"
        />
        <button type="submit" className="SearchForm_Button">
          검색
        </button>
      </form>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"  제목을 입력해주세요"}
          {...register("title", { required: true })}
        />
        <Input
          onChange={(e) => setText(e.target.value)}
          placeholder={"  내용을 입력해주세요"}
          {...register("content", { required: true })}
        />
        <Button btnText="ToDo 생성" type="submit" disabled={!isValid} />
      </form>

      <div className="lists">
        {todoList?.map((todo) => (
          <div
            className="lists_container"
            key={todo.id}
            onClick={handleClick(todo.id)}
          >
            <input
              type="checkbox"
              defaultChecked={todo.checked}
              onChange={(e) => {
                e.stopPropagation();
                fetchUpdateTodoList({ id: todo.id, checked: !todo.checked });
              }}
            />
            {/* 수정이 아닐 떄 */}
            {editingId !== todo.id && (
              <div className="lists_container_textbox">
                <div>
                  <p>{todo.title}</p>
                  <p>{todo.content}</p>
                </div>
              </div>
            )}
            {/* 수정 중 상태일 때 */}
            {editingId === todo.id && (
              <div
                className="lists_container_inputContainer"
                key={todo.id}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="lists_container_updateInputBox">
                  <input
                    defaultValue={editTitle}
                    onChange={(e) => {
                      e.stopPropagation();
                      setEditTitle(e.target.value);
                    }}
                  />
                  <input
                    defaultValue={editText}
                    onChange={(e) => {
                      e.stopPropagation();
                      setEditText(e.target.value);
                    }}
                  />
                </div>
              </div>
            )}
            <div className="lists_container_buttonBox">
              <button
                className="Del_update_Button"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todo.id);
                }}
              >
                삭제하기
              </button>

              {editingId === todo.id ? (
                <button
                  className="Del_update_Button"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateTodo(editingId);
                  }}
                >
                  수정 완료
                </button>
              ) : (
                <button
                  className="Del_update_Button"
                  onClick={(e) => {
                    {
                      e.stopPropagation();
                      setEditingId(todo.id);
                      setEditTitle(todo.title);
                      setEditText(todo.content);
                    }
                  }}
                >
                  수정 진행
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
