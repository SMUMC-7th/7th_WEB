import * as S from './Profile.styled';


const Profile = (props) => {
    const {character, name, profile_path, job} = props;
    // console.log("profile_props",props);
    const img_path = `https://image.tmdb.org/t/p/original${profile_path}`
    const empty_img_path = "/src/mocks/profile.png"

    return(
        <S.Container>
            <S.Profile_img image = {profile_path ? img_path : empty_img_path}/>
            <S.Name>{name}</S.Name>
            {character ? <S.Job>{character}</S.Job> : <S.Job>{job}</S.Job>}
        </S.Container>
        
    )

}

export default Profile;