import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
import { useContext } from 'react';

const Header = () => {
  const nav = useNavigate();
  const { isLogin } = useContext(LoginContext);

  return (
    <header className='w-full h-16 bg-green-primary text-white px-6 py-4'>
      <div className='w-full flex justify-between'>
        <div onClick={() => nav('/')} className='text-2xl font-extrabold cursor-pointer'>
          Blogme
        </div>
        <div className='flex gap-6 font-bold'>
          {isLogin ? (
            <button>로그아웃</button>
          ) : (
            <>
              <button
                onClick={() => nav('/login')}
                className='w-20 bg-white text-green-primary rounded-md'
              >
                로그인
              </button>
              <button
                onClick={() => nav('/signup')}
                className='w-20 bg-white text-green-primary rounded-md'
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export { Header };
