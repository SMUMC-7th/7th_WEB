import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer/CartContainer";
import Footer from "./components/Footer";
import MordalPortal from "./components/ModalPortal/ModalPortal";
import Modal from "./components/Modal/Modal";
import useCartStore from "./store/useCartStore";
import useModalStore from "./store/useModalStore";
import { useEffect } from "react";

function App() {
  const { cartItems, calculateTotals } = useCartStore();
  const { isOpen } = useModalStore();

  useEffect(() => {
    calculateTotals();
  }, [cartItems]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CartContainer />
        {isOpen && (
          <MordalPortal>
            <Modal>
              <h4>초기화하시겠습니까?</h4>
            </Modal>
          </MordalPortal>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
