import fetchData from "../../api/TestInstance";
import { useEffect, useState } from "react";
import LoadingLottie from "../../components/Loding/Loding";
import * as S from "./test.style";

const TestPage = () => {
  const [userData, setUserData] = useState(null);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchData(`/Users`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetchData.delete(`/Users/${userId}`);
      console.log("Deleted user response:", response);
      setUserData((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      );
    } catch (error) {
      console.error("Error deleting user data:", error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await fetchData.post("/Users", { name: newUserName });
      console.log("Created user response:", response);
      setUserData((prevUsers) => [...prevUsers, response.data]);
      setNewUserName("");
    } catch (error) {
      console.error("Error deleting user data:", error);
    }
  };

  return (
    <>
      {userData ? (
        <div>
          <S.Container>
            {userData.map((user) => (
              <button key={user.id} onClick={() => handleDelete(user.id)}>
                {user.name}
              </button>
            ))}
          </S.Container>
          <S.Input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="이름을 입력해주세요"
          />
          <S.Button onClick={handleCreate}>추가</S.Button>
        </div>
      ) : (
        <LoadingLottie />
      )}
    </>
  );
};

export default TestPage;
