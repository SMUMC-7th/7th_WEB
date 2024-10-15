import { CREATE_LIST_BODY } from "../../constants/menu";
import { useRequestApi } from "../../hooks/useRequestApi";

function CreateListBtn() {
  const { handleRequest, isLoading, isError } = useRequestApi();

  const handleCreateList = async () => {
    handleRequest({
      method: "post",
      url: `${import.meta.env.VITE_MOVIE_API_URL}/list?session_id=${localStorage.getItem("session_id")}`,
      body: CREATE_LIST_BODY,
      localKeys: ["session_id"],
      onSuccess: (data) => {
        localStorage.setItem("list_id", data.list_id);
        alert("리스트가 생성되었어요!");
      },
      errorMessage: "리스트를 생성하지 못했어요.",
    });

  };

  return <button onClick={handleCreateList}>
    { isLoading ? "..." : "만들기" }
  </button>
}

export { CreateListBtn }