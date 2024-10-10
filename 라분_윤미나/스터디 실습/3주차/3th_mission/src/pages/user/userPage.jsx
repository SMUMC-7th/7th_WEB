import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import fetchData from "../../api/Axio";
import * as S from "./userPage.style";
import LoadingLottie from "../../components/Loding/Loding";
import ErrorLottie from "../../components/Error/Error";

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchData("/me");
        console.log("API Response:", response.data);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setHasError(true);
      }
    };
    fetchUserData();
  }, []);

  if (hasError) {
    return <ErrorLottie />;
  }

  //console.log(userData);
  return (
    <S.Container>
      <FaUserCircle size="25px" />
      <h3>현재 로그인한 유저</h3>
      {userData ? (
        <div>
          <p>name : {userData.display_name}</p>
          <p>id : {userData.id}</p>
        </div>
      ) : (
        <LoadingLottie />
      )}
    </S.Container>
  );
};

export default UserPage;
