import * as S from './sidebar.style'
import Profile from '../Profile/profile.jsx'
import Navbar from '../Navbar/navbar.jsx'

function Sidebar(){
    return <S.Nav>
        <Profile></Profile>
        <Navbar></Navbar>
    </S.Nav>
}

export default Sidebar;
