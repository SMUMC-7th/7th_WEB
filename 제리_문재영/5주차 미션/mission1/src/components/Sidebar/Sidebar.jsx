import * as S from './Sidebar.styled'
import { IoMdSearch } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";

const Sidebar = () => {
    return (
        <S.Sidebar>
            <S.SidebarLink to={'/search'}><IoMdSearch/> 찾기</S.SidebarLink>
            <S.SidebarLink to={'/movies'}><BiSolidCameraMovie/> 영화</S.SidebarLink>
        </S.Sidebar>
    )
}
export default Sidebar;