import "./App.css";
import CartContainer from "./component/CartContainer/CartContainer";
import NavBar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import useCartStore from "./store/cartstore";
import useModalStore from "./store/modalstore";
import { useEffect } from "react";
import ModalPortal from "./component/ModalPortal/ModalPortal";
import Modal from "./component/Modal/Modal";

function App() {
  const { cartItems, calculateTotal } = useCartStore();
  //const { cartItems } = useCartStore((store) => store.cart);
  const { isOpen } = useModalStore();

  useEffect(() => {
    calculateTotal();
  }, [cartItems, calculateTotal]);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <CartContainer />
        {isOpen && (
          <ModalPortal>
            <Modal>
              <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
            </Modal>
          </ModalPortal>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
