import * as S from "./SideNav.style.js"
import { IoSearch } from "react-icons/io5";
import { MdMovie } from "react-icons/md";

function SideNav() {

  return <S.Container>
    <S.Item href="/search">
      <IoSearch color="white" />
      <p>찾기</p>
    </S.Item>
    <S.Item href="/movies">
      <MdMovie color="white" />
      <p>영화</p>
    </S.Item>
  </S.Container>
}

export default SideNav;