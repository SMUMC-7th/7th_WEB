import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  if (typeof window === "undefined") {
    return null;
  }
  const node = document.getElementById("portal");
  // console.log("Portal 노드:", node);
  // return node
  //   ? reactDom.createPortal(children, node)
  //   : console.log("포탈 실행 X");
  return reactDom.createPortal(children, node);
};

export default ModalPortal;
