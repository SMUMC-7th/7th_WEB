import React from "react";
import ReactDOM from "react-dom";
import { useSideModalStore } from "../state/sideModal/store";

function SideModal() {
  const { isOpen, closeModal } = useSideModalStore();
  console.log(isOpen);
  // if (!isOpen) return null;

  // 포탈 박스 가져오기
  // const portalElement = document.getElementById("portal");
  const portalElement = document.getElementById("portal") as HTMLElement;
  console.log(portalElement);
  // 포탈 박스 없으면 null
  if (!portalElement) return null;
  // 포탈 박스 있으면 이동
  return ReactDOM.createPortal(
    <>
      {/* 오버레이 */}
      <div
        onClick={() => closeModal()}
        className={`fixed left-0 top-0 h-full w-full bg-slate-200 bg-opacity-70 transition-opacity duration-450 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
      {/* 모달 */}
      <div
        className={`w-1/5 h-full fixed top-0 left-0 flex flex-col items-center bg-blue-400 transition duration-400 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-[-20%] opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-[15%] flex flex-col flex-center">
          <button
            className="w-3/5 bg-sky-100 rounded"
            onClick={() => closeModal()}
          >
            X
          </button>
        </div>
        <div className="w-full flex-1 flex items-center flex-col gap-8">
          <div className="w-1/2 text-slate-200 hover:scale-125 rounded">
            로그인
          </div>
          <div className="w-1/2 text-slate-200 hover:scale-125 rounded">
            회원가입
          </div>
          <div className="w-1/2 text-slate-200 hover:scale-125 rounded">
            마이페이지
          </div>
          <div className="w-1/2 text-slate-200 hover:scale-125 rounded">
            글 작성
          </div>
        </div>
      </div>
    </>,
    portalElement
  );
}

export default SideModal;
