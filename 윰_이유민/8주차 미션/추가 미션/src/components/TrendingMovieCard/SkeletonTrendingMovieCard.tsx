const SkeletonTrendingMovieCard = ({ number }: { number: number }) => {
  return (
    <div className='w-full h-full grid grid-cols-4 gap-4'>
      {new Array(number).fill(0).map((_, idx) => (
        <div key={idx} className='relative w-full h-28 rounded-md bg-slate-700 animate-skeleton' />
      ))}
    </div>
  );
};

export { SkeletonTrendingMovieCard };
