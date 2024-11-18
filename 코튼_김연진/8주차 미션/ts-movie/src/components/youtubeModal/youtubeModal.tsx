import * as S from './youtubeModal.style';
import Portal from '../portal/portal';
import YouTube from 'react-youtube';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getMovieVideos } from '../../apis/movie';
import Error from '../error/error';
import { useState, useEffect } from 'react';

interface youtubeModalProps {
    onClose: () => void;
}

const opts = {
    width: '640',
    height: '390',
    playerVars: {
        autoplay: 1,
    },
};

const opts2 = {
    width: '450',
    height: '280',
    playerVars: {
        autoplay: 1,
    },
};

const YoutubeModal = ({ onClose }: youtubeModalProps) => {
    const { movieId } = useParams();
    const [currentOpts, setCurrentOpts] = useState(opts);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1080) {
                setCurrentOpts(opts2);
            } else {
                setCurrentOpts(opts);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { data: youtubeData, error } = useQuery({
        queryKey: ['YouTubemovieId', movieId],
        queryFn: () => getMovieVideos(movieId || ''),
        enabled: !!movieId,
    });

    if (error) return <Error></Error>;
    console.log(youtubeData?.results?.[0].key);

    return (
        <Portal>
            <S.Container>
                <S.Backdrop
                    onClick={() => {
                        console.log('Backdrop clicked');
                        onClose();
                    }}
                ></S.Backdrop>
                <S.Modal>
                    <YouTube
                        videoId={youtubeData?.results?.[0].key}
                        opts={currentOpts}
                    ></YouTube>
                </S.Modal>
            </S.Container>
        </Portal>
    );
};

export default YoutubeModal;
