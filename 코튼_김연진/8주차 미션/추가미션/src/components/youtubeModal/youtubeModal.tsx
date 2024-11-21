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
            <div className="flex h-full flex-col absolute z-10 top-0 left-0 w-full justify-center items-center">
                <div
                    className="w-full h-full bg-black opacity-[50%] absolute z-1"
                    onClick={() => {
                        onClose();
                    }}
                ></div>
                <div className="flex relative z-2">
                    <YouTube videoId={youtube} opts={currentOpts}></YouTube>
                </div>
            </div>
        </Portal>
    );
};

export default YoutubeModal;
