import React from "react";
import * as S from "./Sidebar.style";
import { IoIosSearch } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const naviage = useNavigate();
  return (
    <S.Container>
      <S.MenuList>
        <li onClick={() => naviage("/search")}>
          <span>
            <IoIosSearch />
          </span>
          <p>검색</p>
        </li>
        <li onClick={() => naviage("/category")}>
          <span>
            <BiCameraMovie />
          </span>
          <p>카테고리</p>
        </li>
      </S.MenuList>
    </S.Container>
  );
}

export default Sidebar;
