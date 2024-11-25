import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        네
      </button>
      <button type="button">아니요</button>
    </div>
  );
};

export default ModalButton;
