import { useEffect, useState, useRef } from 'react';
import * as S from './mainInfo.style';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
const AnimatedNumber = ({
    targetNumber,
    isVisible,
}: {
    targetNumber: number;
    isVisible: boolean;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const increment = targetNumber / (duration / 10);

        const animate = () => {
            start += increment;
            if (start < targetNumber) {
                setCount(Math.floor(start));
                requestAnimationFrame(animate);
            } else {
                setCount(targetNumber);
            }
        };

        animate();
    }, [targetNumber, isVisible]);

    return <span>{count}</span>;
};

const MainInfo = () => {
    const { theme } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
    const cardsRef = useRef(null);

    useEffect(() => {
        const targetNode = cardsRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (targetNode) {
            observer.observe(targetNode);
        }

        return () => {
            if (observer && targetNode) {
                observer.unobserve(targetNode);
            }
        };
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        target.style.opacity = '1';
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <S.Container ref={containerRef} isVisible={isVisible}>
            <S.Info>
                <S.Title islight={theme}>SMUMC</S.Title>
                <S.Tags islight={theme}>
                    <S.Tag>#스터디</S.Tag>
                    <S.Tag>#해커톤</S.Tag>
                    <S.Tag>#아이디어톤</S.Tag>
                    <S.Tag>#데모데이</S.Tag>
                    <S.Tag>#파트별 컨퍼런스</S.Tag>
                </S.Tags>
                <S.Cards ref={cardsRef} islight={theme}>
                    <S.Card>
                        <S.Explain>역대 SMUMC 멤버수</S.Explain>
                        <S.Number>
                            <AnimatedNumber
                                targetNumber={187}
                                isVisible={isVisible}
                            />
                            명
                        </S.Number>
                    </S.Card>
                    <S.Card>
                        <S.Explain>현재 회원 수</S.Explain>
                        <S.Number>
                            <AnimatedNumber
                                targetNumber={38}
                                isVisible={isVisible}
                            />
                            명
                        </S.Number>
                    </S.Card>
                    <S.Card>
                        <S.Explain>현재 기수</S.Explain>
                        <S.Number>
                            <AnimatedNumber
                                targetNumber={7}
                                isVisible={isVisible}
                            />
                            기
                        </S.Number>
                    </S.Card>
                </S.Cards>
            </S.Info>
        </S.Container>
    );
};

export default MainInfo;
