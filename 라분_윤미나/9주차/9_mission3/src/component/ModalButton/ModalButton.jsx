import Btn_Container from "./ModalButton.style";
import useCartStore from "../../store/cartstore";
import useModalStore from "../../store/modalstore";

const ModalButton = () => {
  const { clearCart } = useCartStore();
  const { closeModal } = useModalStore();

  return (
    <Btn_Container>
      <button
        type="button"
        onClick={() => {
          clearCart();
          //모달 꺼지는 상태 연결
          closeModal();
        }}
      >
        네
      </button>
      <button
        type="button"
        onClick={() => {
          //모달 꺼지는 상태 연결
          closeModal();
        }}
      >
        아니요
      </button>
    </Btn_Container>
  );
};

export default ModalButton;
