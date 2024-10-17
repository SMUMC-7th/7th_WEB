import { useRequestApi } from '../../hooks/useRequestApi';

function DeleteBtn() {
  const { handleRequest, isLoading, isError } = useRequestApi();

  const handleDeleteList = async () => {
    handleRequest({
      method: "delete",
      url: `/list/${localStorage.getItem("list_id")}?session_id=${localStorage.getItem("session_id")}`,
      localKeys: ["list_id", "session_id"],
      onSuccess: () => {
        alert("리스트가 삭제되었습니다.");
        localStorage.removeItem("list_id");
      },
      errorMessage: "리스트를 삭제하는 데 오류가 발생했습니다.",
    });

  };

  return (
    <button onClick={handleDeleteList}>{isLoading ? '...' : '삭제하기'}</button>
  );
}

export { DeleteBtn };
