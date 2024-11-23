import "./App.css";
import CartContainer from "./component/CartContainer/CartContainer";
import NavBar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal } from "./features/cart/cartSlice";
import ModalPortal from "./component/ModalPortal/ModalPortal";
import Modal from "./component/Modal/Modal";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);
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
