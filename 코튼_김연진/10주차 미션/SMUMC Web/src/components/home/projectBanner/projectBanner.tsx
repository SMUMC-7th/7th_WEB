import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectCard from '../projectCard/projectCard';
import * as S from './projectBanner.style';
import { PROJECTS } from '../../../mocks/projectData';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
const CenterMode: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { theme } = useContext(ThemeContext);
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '350px',
        slidesToShow: 1,
        speed: 500,
        focusOnSelect: true,
        dots: true,
        arrows: false,
        beforeChange: (_current: number, next: number) => setActiveIndex(next),
    };
    return (
        <S.Container className="slider-container" islight={theme}>
            <Slider {...settings}>
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        isActive={index === activeIndex}
                    />
                ))}
            </Slider>
        </S.Container>
    );
};

export default CenterMode;
