interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface Crew {
  id: number;
  name: string;
  job: string;
  profile_path: string | null;
}

interface CreditData {
  cast: Cast[];
  crew: Crew[];
}

const AllCredits = ({ creditData }: { creditData: CreditData }) => {
  console.log(creditData);

  return (
    <>
      <div className="max-w-4xl bg-black bg-opacity-50 p-10 mt-6">
        <h2 className="text-2xl font-bold">출연</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {creditData?.cast?.map(
            (
              actor: Cast // 타입 지정
            ) => (
              <div key={actor.id} className="flex flex-col items-center">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                      : "https://via.placeholder.com/70"
                  } // 기본 이미지 사용
                  alt={actor.name}
                  className="rounded-full w-24 h-24 object-cover" // 비율 유지
                />
                <p className="mt-2 text-center">{actor.name}</p>
                <p className="text-sm text-gray-400">{actor.character}</p>
              </div>
            )
          )}
        </div>
      </div>

      <div className="max-w-4xl bg-black bg-opacity-50 p-10 mt-6">
        <h2 className="text-2xl font-bold">제작진</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {creditData?.crew?.map(
            (
              crewMember: Crew // 타입 지정
            ) => (
              <div key={crewMember.id} className="flex flex-col items-center">
                <img
                  src={
                    crewMember.profile_path
                      ? `https://image.tmdb.org/t/p/w200${crewMember.profile_path}`
                      : "https://via.placeholder.com/70"
                  } // 기본 이미지 사용
                  alt={crewMember.name}
                  className="rounded-full w-24 h-24 object-cover" // 비율 유지
                />
                <p className="mt-2 text-center">{crewMember.name}</p>
                <p className="text-sm text-gray-400">{crewMember.job}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default AllCredits;
