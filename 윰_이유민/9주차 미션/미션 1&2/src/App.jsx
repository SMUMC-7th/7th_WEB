import './App.css';
import CartContainer from './components/cartContainer/CartContainer';
import Navbar from './components/navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { caculateTotals } from './features/cart/cartSlice';
import ModalPortal from './components/modalPortal/ModalPortal';
import Modal from './components/modal/Modal';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(caculateTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      <header>
        <Navbar />
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
