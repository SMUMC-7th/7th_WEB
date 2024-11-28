import './App.css';
import CartContainer from './components/cartContainer/CartContainer';
import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';
import ModalPortal from './components/modalPortal/ModalPortal';
import Modal from './components/modal/Modal';
import Footer from './components/footer/Footer';
import { useCarStore, useModalStore } from './store/store';

function App() {
  const isOpen = useModalStore((state) => state.isOpen);
  const cartItems = useCarStore((state) => state.cartItems);
  const caculateTotals = useCarStore((state) => state.caculateTotals);

  useEffect(() => {
    caculateTotals();
  }, [cartItems, caculateTotals]);

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
