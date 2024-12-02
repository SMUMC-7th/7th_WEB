import * as S from './profile.style';
import { TeamMember } from '../../../mocks/profile';
import woman from '../../../images/woman.webp';
import man from '../../../images/man.webp';
const Profile = ({ position, name, part, year, sex, github }: TeamMember) => {
    return (
        <S.Container>
            {github !== null && github !== '' ? (
                <S.GitLink to={`https://github.com/${github}`}>
                    <S.GithubIcon></S.GithubIcon>
                </S.GitLink>
            ) : (
                <></>
            )}

            <S.ImgContainer>
                {sex === 'w' ? <img src={woman}></img> : <img src={man}></img>}
            </S.ImgContainer>

            <S.Content>
                <S.Type>{position}</S.Type>
                <S.Name>{name}</S.Name>
                <S.Part>
                    {year}기 {part}
                </S.Part>
            </S.Content>
        </S.Container>
    );
};

export default Profile;
