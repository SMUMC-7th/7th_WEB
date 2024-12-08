import * as S from './mainPart.style';
import { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import { PART } from '../../../mocks/part';

const MainPart = () => {
    const { theme } = useContext(ThemeContext);
    const [selectedButton, setSelectedButton] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleButtonClick = (index: number) => {
        if (index === selectedButton) {
            return;
        }
        setSelectedButton(index);
    };

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
            <S.Title islight={theme}>
                총 <span>6</span>개의 파트로 구성
            </S.Title>
            <S.Buttons>
                {PART.map((part) => (
                    <S.Button
                        key={part.id}
                        onClick={() => handleButtonClick(part.id)}
                        className={selectedButton === part.id ? 'selected' : ''}
                        islight={theme}
                    >
                        {part.part}
                    </S.Button>
                ))}
            </S.Buttons>
            <S.Content islight={theme}>
                {PART[selectedButton].description}
            </S.Content>
        </S.Container>
    );
};

export default MainPart;
