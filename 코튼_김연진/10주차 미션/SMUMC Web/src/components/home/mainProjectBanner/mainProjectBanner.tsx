import * as S from './mainProjectBanner.style';
import CenterMode from '../projectBanner/projectBanner';
import { useState, useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

const MainProjectBanner = () => {
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
            <S.Title islight={theme}>PROJECTS</S.Title>
            <S.Text islight={theme}>University MakeUs Challenge</S.Text>
            <S.Text islight={theme}>데모데이 프로젝트 - SMUMC</S.Text>
            <CenterMode />
        </S.Container>
    );
};

export default MainProjectBanner;
