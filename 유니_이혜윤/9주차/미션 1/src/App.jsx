import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CartContainer from "./components/CartContainer/CartContainer";
import Footer from "./components/Footer";
import MordalPortal from "./components/ModalPortal/ModalPortal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

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
