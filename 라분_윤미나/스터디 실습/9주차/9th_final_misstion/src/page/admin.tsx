import UserList from "../component/UserList";

const AdminPage = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1>가입된 유저 목록</h1>
      <UserList />
    </div>
  );
};

export default AdminPage;
