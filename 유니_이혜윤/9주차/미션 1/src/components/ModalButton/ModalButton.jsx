import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/modal/modalSlice";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal());
        }}
      >
        네
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        아니요
      </button>
    </div>
  );
};

export default ModalButton;
