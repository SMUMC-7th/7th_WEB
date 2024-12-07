import * as S from './profile.style';
import { TeamMember } from '../../../mocks/profile';
import woman from '../../../images/woman.webp';
import man from '../../../images/man.webp';
import { useState } from 'react';

const Profile = ({ position, name, part, year, sex, github }: TeamMember) => {
    const [isImgError, setIsImgError] = useState(false);

    return (
        <S.Container>
            {!isImgError && github && (
                <S.GitLink to={`https://github.com/${github}`} target="_blank">
                    <S.GithubIcon />
                </S.GitLink>
            )}

            <S.ImgContainer>
                {!isImgError && github ? (
                    <S.Img
                        src={`https://github.com/${github}.png`}
                        alt={`${name}'s GitHub Avatar`}
                        onError={() => setIsImgError(true)}
                    />
                ) : (
                    <S.AlternativeImg
                        src={sex === 'w' ? woman : man}
                        alt={sex === 'w' ? 'Woman Avatar' : 'Man Avatar'}
                        style={{ width: '100px' }}
                    />
                )}
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
