import React, { useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { useSideModalStore } from "../state/sideModal/store";
import LoginCheck from "./LoginCheck";
import { getCookie } from "../utils/cookie";
import { useNavigate } from "react-router";
import { useAuthStore } from "../state/auth/store";

function Header() {
  const { isOpen, openModal, closeModal } = useSideModalStore();
  const navigate = useNavigate();
  const { loginValidCheck } = useAuthStore();

  const handleMenuClick = () => {
    openModal();
  };

  const token = getCookie("accessToken");

  useEffect(() => {
    if (!token) return;
    loginValidCheck();
  }, []);

  return (
    <div className="min-w-[90%] flex items-center justify-between">
      <span
        className="text-3xl  hover:scale-125 cursor-pointer"
        onClick={() => handleMenuClick()}
      >
        <IoIosMenu />
      </span>
      <div className="absolute left-[44.5%] text-3xl">나의 블로그</div>
      <div className=" flex flex-center">
        {token && <LoginCheck />}
        <span
          className="text-3xl hover:scale-125 ml-5 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          {/* <IoMdPerson /> */}
          <IoLogOutOutline />
        </span>
        {/* <span></span> */}
      </div>
    </div>
  );
}

export default Header;
