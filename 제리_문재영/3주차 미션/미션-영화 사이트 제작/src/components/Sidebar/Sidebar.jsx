import * as S from './Sidebar.styled'

const Sidebar = () => {
    return (
        <S.Sidebar>
            <S.SidebarLink to={'/search'}>찾기</S.SidebarLink>
            <S.SidebarLink to={'/movies'}>영화</S.SidebarLink>
        </S.Sidebar>
    )
}
export default Sidebar;