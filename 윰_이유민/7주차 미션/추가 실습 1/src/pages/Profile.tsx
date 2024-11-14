import { useAuthContext } from '../context/AuthContext';

const Profile = () => {
  const { username } = useAuthContext();

  return <div>{username}님 환영합니다.</div>;
};

export default Profile;
