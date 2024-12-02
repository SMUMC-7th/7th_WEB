import * as S from './projectCard.style';
import { Project } from '../../../mocks/projectData';
import errImg from '../../../images/recruitingposter.webp';
interface ProjectCardProps extends Project {
    isActive: boolean;
}

const ProjectCard = ({
    name,
    description,
    img,
    isActive,
    theme,
    member,
}: ProjectCardProps) => {
    return (
        <S.Container>
            <S.Img>
                <img
                    src={
                        'https://raw.githubusercontent.com/SMU-UMC/SMUMC-NEXT/refs/heads/main/public' +
                        img
                    }
                    alt={name}
                    onError={(e) => {
                        e.currentTarget.src = errImg;
                    }}
                />
            </S.Img>
            <S.Overlay isActive={isActive}>
                <S.Title>{name}</S.Title>
                <S.Text>{description}</S.Text>
                <S.Names>
                    {member.map((mem) => (
                        <S.Name key={mem}>{mem}</S.Name>
                    ))}
                </S.Names>
                <S.Stacks>
                    {theme.map((stack) => (
                        <S.Stack>{stack}</S.Stack>
                    ))}
                </S.Stacks>
            </S.Overlay>
        </S.Container>
    );
};

export default ProjectCard;
