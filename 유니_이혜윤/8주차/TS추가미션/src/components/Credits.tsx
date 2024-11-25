const DEFAULT_IMAGE_URL = "https://via.placeholder.com/70"; // 기본 이미지 URL

interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

interface Crew {
  id: number;
  name: string;
  job: string;
  profile_path: string;
}

interface CreditData {
  cast: Cast[];
  crew: Crew[];
}

const Credits = ({ creditData }: { creditData: CreditData }) => {
  console.log(creditData);

  return (
    <>
      <div className="bg-black p-8">
        <h2 className="text-xl text-white">캐스트</h2>
        <div className="grid grid-cols-10 mt-4">
          {creditData?.cast?.slice(0, 10).map((actor: Cast) => (
            <div
              key={actor.id}
              className="flex flex-col items-center w-[100px]"
            >
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : DEFAULT_IMAGE_URL
                } // 기본 이미지 사용
                alt={actor.name}
                className="rounded-full w-[70px] h-[70px] object-cover"
              />
              <p className="text-[13px] text-white mt-2 text-center">
                {actor.name}
              </p>
              <p className="text-[10px] text-gray-400">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black p-8">
        <h2 className="text-xl text-white">제작진</h2>
        <div className="grid grid-cols-10 mt-4">
          {creditData?.crew?.slice(0, 10).map((crewMember: Crew) => (
            <div
              key={crewMember.id}
              className="flex flex-col items-center w-[100px]"
            >
              <img
                src={
                  crewMember.profile_path
                    ? `https://image.tmdb.org/t/p/w200${crewMember.profile_path}`
                    : DEFAULT_IMAGE_URL
                } // 기본 이미지 사용
                alt={crewMember.name}
                className="rounded-full w-[70px] h-[70px] object-cover"
              />
              <p className="text-[13px] text-white mt-2 text-center">
                {crewMember.name}
              </p>
              <p className="text-[10px] text-gray-400">{crewMember.job}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Credits;
