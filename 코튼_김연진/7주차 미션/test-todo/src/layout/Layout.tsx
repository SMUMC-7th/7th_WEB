import { useAuthContext } from '../context/AuthContext';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const { username } = useAuthContext();
  return (
    <div>
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to='/'>메인</Link>
        </div>
        {username ? (
          <Link to='/profile'>{username}</Link>
        ) : (
          <Link to='/login'>로그인</Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
