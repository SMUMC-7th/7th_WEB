import * as S from './next.style';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { NEWS_INFOS } from '../../../mocks/info';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Next = () => {
    const { theme } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const currentContainer = containerRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (currentContainer) {
            observer.observe(currentContainer);
        }

        return () => {
            if (currentContainer) {
                observer.unobserve(currentContainer);
            }
        };
    }, []);
    return (
        <S.Container ref={containerRef} isVisible={isVisible}>
            <S.Title islight={theme}>WHAT'S NEXT?</S.Title>
            <S.Cards>
                {NEWS_INFOS.map((info) => {
                    return (
                        <S.Card>
                            <S.Img>
                                <img
                                    src={`https://raw.githubusercontent.com/SMU-UMC/SMUMC-NEXT/refs/heads/main/public${info.image}`}
                                    className="firstImg"
                                    alt="first image"
                                />
                                <img
                                    src={`https://raw.githubusercontent.com/SMU-UMC/SMUMC-NEXT/refs/heads/main/public${info.detailImage}`}
                                    className="secondImg"
                                    alt="second image"
                                />
                            </S.Img>
                            <S.Subtitle>{info.title}</S.Subtitle>
                            <S.Description>{info.description}</S.Description>
                            <S.Date>{info.date}</S.Date>
                        </S.Card>
                    );
                })}
            </S.Cards>
        </S.Container>
    );
};

export default Next;
