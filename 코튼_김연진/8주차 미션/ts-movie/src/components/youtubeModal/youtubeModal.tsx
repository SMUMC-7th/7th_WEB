import * as S from './youtubeModal.style';
import Portal from '../portal/portal';
import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';

interface youtubeModalProps {
    onClose: () => void;
    youtube: string;
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

const YoutubeModal = ({ onClose, youtube }: youtubeModalProps) => {
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

    return (
        <Portal>
            <S.Container>
                <S.Backdrop
                    onClick={() => {
                        onClose();
                    }}
                ></S.Backdrop>
                <S.Modal>
                    <YouTube videoId={youtube} opts={currentOpts}></YouTube>
                </S.Modal>
            </S.Container>
        </Portal>
    );
};

export default YoutubeModal;
