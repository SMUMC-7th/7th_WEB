import { BiSolidCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex gap-8 items-end'>
      <Link
        to='/category'
        className='h-full flex gap-1 items-center cursor-pointer text-gray-500 hover:text-white'
      >
        <BiSolidCategory />
        <p>카테고리</p>
      </Link>
    </div>
  );
};

export default Navbar;
