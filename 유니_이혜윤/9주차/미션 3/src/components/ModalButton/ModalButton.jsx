import useCartStore from "../../store/useCartStore";
import useModalStore from "../../store/useModalStore";

const ModalButton = () => {
  const { clearCart } = useCartStore();
  const { closeModal } = useModalStore();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          clearCart();
          closeModal();
        }}
      >
        네
      </button>
      <button
        type="button"
        onClick={() => {
          closeModal();
        }}
      >
        아니요
      </button>
    </div>
  );
};

export default ModalButton;
