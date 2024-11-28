import { Link } from 'react-router-dom';
import { CATEGORY } from '../constants/category';

function Category() {
  return (
    <div className='py-4 px-24 flex flex-col gap-4'>
      <h1 className='text-xl font-bold'>카테고리</h1>
      <div className='w-full h-full grid grid-cols-4 gap-4'>
        {CATEGORY.map((category) => (
          <Link
            to={category.url_path}
            key={category.id}
            className='relative h-32 hover:brightness-50 rounded-md overflow-hidden'
          >
            <img
              className='absolute w-full h-full object-cover'
              src={category.img_path}
              alt={category.name}
            />
            <div className='absolute h-full flex flex-col justify-end p-1'>
              <p className='bg-black bg-opacity-60 rounded-sm px-1 text-sm'>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Category;
