import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { SearchBar } from './searchBar';

const Header = () => {
  return (
    <header className='w-full flex justify-between px-8 py-5 items-center bg-slate-800'>
      <div className='flex gap-8'>
        <Link to='/' className='text-rose-600 text-3xl font-bold text-center'>
          YUMCHA
        </Link>
        <Navbar />
      </div>
      <div className='flex gap-4 '>
        <SearchBar />
        <Link
          to='/login'
          className='w-20 rounded-md hover:bg-white hover:text-black flex items-center justify-center'
        >
          로그인
        </Link>
        <Link
          to='/signup'
          className='w-20 bg-red-600 rounded-md hover:bg-red-900 flex items-center justify-center'
        >
          회원가입
        </Link>
      </div>
    </header>
  );
};

export default Header;
