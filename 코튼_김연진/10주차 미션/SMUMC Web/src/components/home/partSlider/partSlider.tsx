import { useEffect, useRef, useState } from 'react';
import * as S from './partSlider.style';

const initialBanners = [
    '#Server',
    '#Web',
    '#Android',
    '#iOS',
    '#Designer',
    '#PM',
    '#Server',
    '#Web',
    '#Android',
    '#iOS',
    '#Designer',
    '#PM',
];

function PartSlider() {
    const [currentBanners, setCurrentBanners] = useState(initialBanners);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const speed = 1;
        let rafId: number;

        const animate = () => {
            if (container) {
                const banners = Array.from(container.children) as HTMLElement[];

                banners.forEach((banner) => {
                    const currentX =
                        parseFloat(
                            banner.style.transform.replace(
                                /translateX\((-?\d+(?:\.\d+)?)px\)/,
                                '$1'
                            )
                        ) || 0;
                    banner.style.transform = `translateX(${
                        currentX - speed
                    }px)`;
                });

                const firstBanner = banners[0];
                if (firstBanner.getBoundingClientRect().right < 0) {
                    setCurrentBanners((prevBanners) => {
                        const updatedBanners = [
                            ...prevBanners.slice(1),
                            prevBanners[0],
                        ];
                        return updatedBanners;
                    });
                }
            }
            rafId = requestAnimationFrame(animate);
        };

        rafId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <S.Container ref={containerRef}>
            {currentBanners.map((item, index) => (
                <S.Banner key={`${item}-${index}`}>
                    <S.Button>{item}</S.Button>
                </S.Banner>
            ))}
        </S.Container>
    );
}

export default PartSlider;
