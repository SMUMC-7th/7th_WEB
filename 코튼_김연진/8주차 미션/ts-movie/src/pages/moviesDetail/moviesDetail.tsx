import * as S from './moviesDetail.style';
import MovieInfoCard from '../../components/movieInfoCard/movieInfoCard';
import CreditInfoList from '../../components/creditInfoList/creditInfoList';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SimilarMovie from '../../components/similarMovie/similarMovie';
import Review from '../../components/review/review';
import YoutubeModal from '../../components/youtubeModal/youtubeModal';
import { getMovieVideos } from '../../apis/movie';
import { useQuery } from '@tanstack/react-query';

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

    const { data } = useQuery({
        queryKey: ['YouTubemovieId', movieId],
        queryFn: () => getMovieVideos(movieId || ''),
        enabled: !!movieId,
    });
    console.log(data);
    console.log(data?.results?.[0]);

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
        <S.Container>
            <MovieInfoCard key={1} movieId={movieId || ''} />
            {data?.results?.[0] !== undefined ? (
                <>
                    <S.PlayButton onClick={handleOpenModal} />
                    {modalOpen && <YoutubeModal onClose={handleCloseModal} />}
                </>
            ) : (
                <></>
            )}

            <S.Buttons>
                <S.Button onClick={() => setInfo(0)} isActive={info === 0}>
                    영화 정보
                </S.Button>
                <S.Button onClick={() => setInfo(1)} isActive={info === 1}>
                    관련 영화
                </S.Button>
            </S.Buttons>
            {info === 0 ? (
                <>
                    <CreditInfoList key={2} movieId={movieId || ''} />
                    <Review movieId={movieId || ''}></Review>
                </>
            ) : (
                <SimilarMovie id={movieId!}></SimilarMovie>
            )}
        </S.Container>
    );
};

export default MovieDetail;
