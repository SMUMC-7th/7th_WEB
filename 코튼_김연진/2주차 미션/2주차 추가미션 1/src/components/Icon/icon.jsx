import * as S from './icon.style'
import { IoLogoGithub } from "react-icons/io";

function Icon(){
    return <S.Icon href='https://github.com/yeonjin719?tab=overview'>
        <IoLogoGithub size={30}/>
    </S.Icon>
}

export default Icon;
