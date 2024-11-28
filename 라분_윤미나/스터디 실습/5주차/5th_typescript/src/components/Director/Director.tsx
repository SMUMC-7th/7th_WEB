type DirectorProps = {
  profile_path: string;
  character: string;
  original_name: string;
};

const Director = (props: DirectorProps) => {
  const { profile_path, character, original_name } = props;

  return (
    <div className="flex items-center gap-5">
      {profile_path ? (
        <img
          className="w-100 h-150 rounded-lg object-contain"
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
        />
      ) : (
        <img
          className="w-100 h-150 rounded-lg object-contain"
          src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fwww.smu.ac.kr%2F_attach%2Fimage%2F2022%2F10%2FPLKqTefaQxGfcnMdjloJ.png&type=sc960_832"
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-white m-0">{original_name}</h3>
        <p className="text-[rgb(138,138,138)] m-0">{character}</p>
      </div>
    </div>
  );
};

export default Director;
