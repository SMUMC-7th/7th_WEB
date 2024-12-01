import * as S from './profile.style.js';
interface CreditMember {
    id: number;
    profile_path: string;
    name: string;
    character?: string;
    job?: string;
}
function Profile({ profile_path, name, character, job }: CreditMember) {
    return (
        <S.Container>
            {profile_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt={name}
                />
            ) : (
                <img
                    src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
                    alt="접근할 수 있는 이미지가 없습니다"
                />
            )}
            <S.Text>
                <S.Name>{name}</S.Name>

                {character ? (
                    <S.Role>{character}</S.Role>
                ) : (
                    <S.Role>{job}</S.Role>
                )}
            </S.Text>
        </S.Container>
    );
}

export default Profile;
