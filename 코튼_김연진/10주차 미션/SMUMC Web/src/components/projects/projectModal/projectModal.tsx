import * as S from './projectModal.style';
import Portal from '../portal/portal';
import { Project } from '../../../mocks/projectData';
import errImg from '../../../images/recruitingposter.webp';

interface ProjectModalProps extends Project {
    onClose: () => void;
}

const ProjectModal = ({
    name,
    description,
    member,
    img,
    theme,
    github,
    onClose,
    release,
}: ProjectModalProps) => {
    return (
        <Portal>
            <S.Container>
                <S.Backdrop
                    onClick={() => {
                        onClose();
                    }}
                />
                <S.Modal>
                    <S.Header>
                        <S.HeaderTitle>프로젝트 소개</S.HeaderTitle>
                        <S.Xbutton
                            onClick={() => {
                                onClose();
                            }}
                        >
                            <S.CloseBtn></S.CloseBtn>
                        </S.Xbutton>
                    </S.Header>
                    <S.Content>
                        <S.Title>{name}</S.Title>
                        <S.LinkButtons>
                            {github !== null && github !== '' ? (
                                <S.OutGitLink to={github}>
                                    <S.GithubIcon />
                                </S.OutGitLink>
                            ) : (
                                <></>
                            )}
                            {release !== null && release !== '' ? (
                                <S.OutProjLink to="">
                                    <S.LinkIcon />
                                </S.OutProjLink>
                            ) : (
                                <></>
                            )}
                        </S.LinkButtons>

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
                        <S.Stacks>
                            {theme.map((stack) => (
                                <S.Stack key={stack}>{stack}</S.Stack>
                            ))}
                        </S.Stacks>
                        <S.SubTitle>소개</S.SubTitle>
                        <S.Description>{description}</S.Description>
                        <S.SubTitle>개발자</S.SubTitle>
                        <S.Names>
                            {member.map((mem) => (
                                <S.Name key={mem}>{mem}</S.Name>
                            ))}
                        </S.Names>
                    </S.Content>
                </S.Modal>
            </S.Container>
        </Portal>
    );
};

export default ProjectModal;
