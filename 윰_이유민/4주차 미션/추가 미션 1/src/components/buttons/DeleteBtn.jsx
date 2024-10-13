import { useState } from 'react';
import { axiosInstance } from '../../apis/axios-instance';

function DeleteBtn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteList = async () => {
    setIsLoading(true);

    const list_id = localStorage.getItem('list_id');
    const session_id = localStorage.getItem('session_id');

    if (!session_id) {
      alert(
        "Session ID가 존재하지 않습니다! 먼저 'session' 버튼을 클릭하여 ID를 받아주세요.",
      );
      return;
    } else if (!list_id) {
      alert(
        "리스트가 존재하지 않습니다! 먼저 '만들기' 버튼을 클릭하여 리스트를 생성하세요.",
      );
    }

    try {
      const response = await axiosInstance.delete(
        `/list/${list_id}?session_id=${session_id}`,
      );
      alert("리스트가 삭제되었습니다.");
      localStorage.removeItem("list_id");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleDeleteList}>{isLoading ? '...' : '삭제하기'}</button>
  );
}

export { DeleteBtn };
