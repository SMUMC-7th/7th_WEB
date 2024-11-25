import useCustomFetch from "../../hooks/useCustomFetch.js";
import Director from "../Director/Director.tsx";
import { TCredit, TCreditCast } from "../../mocks/movieType.js";
import { useState } from "react";

const MovieCredit = ({ id }: { id: number }) => {
  const {
    data: credit,
    isLoading,
    isError,
  } = useCustomFetch<TCredit>(`/movie/${id}/credits?language=ko`);
  const [isPlus, setIsPlus] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("더보기");

  const handleClick = () => {
    setButtonText((prev) => (prev === "더보기" ? "간소하게" : "더보기"));
    if (isPlus === false) setIsPlus(true);
    else setIsPlus(false);
  };

  if (isLoading) {
    return <h1 style={{ color: "white" }}>로딩중...</h1>;
  }
  if (isError || !credit) {
    return <h1 style={{ color: "white" }}>Error</h1>;
  }

  return (
    <section className="flex flex-col w-screen h-300 text-white">
      <div className="flex justify-between">
        <h1 className="mb-9">감독/출연</h1>
        <button
          className="border-none bg-none mr-[10%]"
          onClick={() => handleClick()}
        >
          {buttonText}
        </button>
      </div>
      {isPlus === false ? (
        <article className="flex gap-[5%] ">
          {credit.cast.slice(0, 4).map((person: TCreditCast) => (
            <Director key={person.id} {...person} />
          ))}
        </article>
      ) : (
        <article className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] auto-rows-[200px]">
          {credit.cast.map((person: TCreditCast) => (
            <Director key={person.id} {...person} />
          ))}
        </article>
      )}
    </section>
  );
};

export default MovieCredit;
