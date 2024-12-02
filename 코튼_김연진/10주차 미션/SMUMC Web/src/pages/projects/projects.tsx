import * as S from './projects.style';
import ProjectCard from '../../components/projects/projectCard/projectCard';
import { PROJECTS } from '../../mocks/projectData';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const Navbar = () => {
    const initialValue = 0;
    const [isClicked, setIsClicked] = useState(initialValue);
    const { theme } = useContext(ThemeContext);

    return (
        <S.Container>
            <S.Title islight={theme}>PROJECTS</S.Title>
            <S.Generations>
                <S.Generation
                    onClick={() => setIsClicked(0)}
                    $isclicked={isClicked === 0}
                    islight={theme}
                >
                    전체
                </S.Generation>
                <S.Generation
                    onClick={() => setIsClicked(5)}
                    $isclicked={isClicked === 5}
                    islight={theme}
                >
                    5기
                </S.Generation>
                <S.Generation
                    onClick={() => setIsClicked(4)}
                    $isclicked={isClicked === 4}
                    islight={theme}
                >
                    4기
                </S.Generation>
                <S.Generation
                    onClick={() => setIsClicked(3)}
                    $isclicked={isClicked === 3}
                    islight={theme}
                >
                    ~3기
                </S.Generation>
            </S.Generations>
            <S.Projects>
                {PROJECTS.filter(
                    (project) =>
                        isClicked === 0 ||
                        project.year === isClicked ||
                        (isClicked === 3 && project.year <= 3)
                ).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </S.Projects>
        </S.Container>
    );
};

export default Navbar;
