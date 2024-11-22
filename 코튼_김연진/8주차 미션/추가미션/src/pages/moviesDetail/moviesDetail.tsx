import { PiPlayCircleLight } from 'react-icons/pi';
import MovieInfoCard from '../../components/movieInfoCard/movieInfoCard';
import CreditInfoList from '../../components/creditInfoList/creditInfoList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SimilarMovie from '../../components/similarMovie/similarMovie';
import Review from '../../components/review/review';
import YoutubeModal from '../../components/youtubeModal/youtubeModal';
import cn from 'classnames';
import useGetMovieVedio from '../../../../추가미션/src/hooks/queries/useGetMovieVedio';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [info, setInfo] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        if (!modalOpen) {
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const { data } = useGetMovieVedio(movieId!);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);

    return (
        <div className="flex flex-col w-full relative">
            <MovieInfoCard key={1} movieId={movieId || ''} />
            {data?.results?.[0] !== undefined ? (
                <>
                    <PiPlayCircleLight
                        className="absolute text-white z-10 w-[50px] h-[50px] left-[45%] top-[150px] 
                                   sc:left-[20px] sc:top-[290px] sc:w-[30px] sc:h-[30px] cursor-pointer"
                        onClick={handleOpenModal}
                    />
                    {modalOpen && (
                        <YoutubeModal
                            onClose={handleCloseModal}
                            youtube={data?.results?.[0].key}
                        />
                    )}
                </>
            ) : null}

            <div className="mt-[20px] flex w-full items-center justify-center">
                <button
                    className={cn(
                        'h-[20px] text-[17px] text-white bg-black border-none px-[10px] underline-offset-[5px]',
                        {
                            underline: info === 0,
                            'no-underline': info !== 0,
                        }
                    )}
                    onClick={() => setInfo(0)}
                >
                    영화 정보
                </button>
                <button
                    className={cn(
                        'h-[20px] text-[17px] text-white bg-black border-none px-[10px] underline-offset-[5px]',
                        {
                            underline: info === 1,
                            'no-underline': info !== 1,
                        }
                    )}
                    onClick={() => setInfo(1)}
                >
                    관련 영화
                </button>
            </div>

            {info === 0 ? (
                <>
                    <CreditInfoList key={2} movieId={movieId || ''} />
                    <Review movieId={movieId || ''}></Review>
                </>
            ) : (
                <SimilarMovie id={movieId!}></SimilarMovie>
            )}
        </div>
    );
};

export default MovieDetail;
