import { TMovieCredit } from '../../types/movie';

const MovieCreditCard = ({ cast }: { cast: TMovieCredit }) => {
  const defaultProfile =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  return (
    <div key={cast.id} className='w-52 h-20 flex gap-2'>
      <img
        className='rounded-full w-16 h-16 object-cover'
        src={
          cast?.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast?.profile_path}`
            : defaultProfile
        }
        alt=''
      />
      <div className='flex flex-col'>
        <p>{cast?.name}</p>
        <p className='text-sm'>{cast?.character}</p>
      </div>
    </div>
  );
};

export { MovieCreditCard };
