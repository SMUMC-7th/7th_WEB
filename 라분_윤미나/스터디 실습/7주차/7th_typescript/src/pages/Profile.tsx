import { useAuthContext } from "../context/AuthContext";

const ProfilePage = () => {
  const { username } = useAuthContext();
  return (
    <div>
      <p>{username}님 환영합니다.</p>
    </div>
  );
};
export default ProfilePage;
