import { useParams } from "react-router-dom";
import * as D from "./MovieDetail.style";
import CreditWrapper from "@/components/CreditWrapper/CreditWrapper";
import useGetMovieDetail from "@/hooks/queries/useGetMovieDetail";
import useGetMovieVideo from "@/hooks/queries/useGetMovieVideo";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import YouTube from "react-youtube";
import { IoCloseCircleOutline } from "react-icons/io5";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [videoKey, setVideoKey] = useState(null);
  const modalRef = useRef();

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movieDetail", movieId],
    queryFn: () => useGetMovieDetail({ movieId }),
  });

  const fetchVideo = async () => {
    try {
      const { results } = await useGetMovieVideo({ movieId });
      const trailer = results.find((video) => video.type === "Trailer");
      if (trailer) setVideoKey(trailer.key);
      else alert("영상 정보를 찾을 수 없습니다.");
    } catch (error) {
      console.error("Error fetching video:", error);
      alert("영상을 가져오는 데 실패했습니다.");
    }
  };

  const closeModal = () => {
    setVideoKey(null);
  };

  // 모달 바깥 클릭 감지
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal(); // 모달 외부 클릭 시 모달 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (isError) return <p>Error occurred 😭</p>;

  return (
    <D.DetailContainer>
      <D.TopWrapper
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
        }}
      >
        <h1>{movie.title}</h1>
        <h4>평점 {movie.vote_average}</h4>
        <h4>{movie.release_date}</h4>
        <h6>{movie.runtime}분</h6>
        <h3>{movie.tagline}</h3>
        <p>{movie.overview}</p>
      </D.TopWrapper>
      <D.BottomWrapper>
        <CreditWrapper movieId={movieId} />
      </D.BottomWrapper>
      <D.VideoIcon onClick={fetchVideo}>
        <MdOutlineSmartDisplay />
      </D.VideoIcon>
      {videoKey && (
        <D.VideoModal ref={modalRef}>
          <button onClick={closeModal} aria-label="Close">
            <IoCloseCircleOutline />
          </button>
          <YouTube
            videoId={videoKey} // YouTube 동영상 id
            opts={{
              height: "315",
              width: "560",
              playerVars: {
                autoplay: 1, // 자동 재생
                controls: 1, // 컨트롤러 표시
              },
            }}
            onReady={(event) => event.target.playVideo()} // 동영상 로드 후 자동 재생
          />
        </D.VideoModal>
      )}
    </D.DetailContainer>
  );
};

export default MovieDetail;
