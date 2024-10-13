import { useState } from "react"
import { axiosInstance } from "../../apis/axios-instance";
import { CREATE_LIST_BODY } from "../../constants/menu";

function CreateListBtn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateList = async () => {
    const session_id = localStorage.getItem("session_id");
    if (!session_id) {
      alert("session ID가 존재하지 않습니다! session 버튼을 먼저 클릭하세요.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axiosInstance.post(`${import.meta.env.VITE_MOVIE_API_URL}/list?session_id=${session_id}`, CREATE_LIST_BODY);
      const { list_id } = response.data;

      localStorage.setItem("list_id", list_id);
      alert("리스트가 생성되었어요!");
    } catch(error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return <button onClick={handleCreateList}>
    { isLoading ? "..." : "만들기" }
  </button>
}

export { CreateListBtn }