import { useModalStore } from './features/modal/modalSlice';
import { useCartStore } from './features/cart/cartSlice';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import ModalPortal from './components/ModalPotal';
import Modal from './components/Modal/Modal';
import { useEffect } from 'react';
function App() {
    const { isOpen } = useModalStore();
    const { carculateTotals, cartItems } = useCartStore();

    useEffect(() => {
        carculateTotals();
    }, [cartItems]);

    return (
        <>
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
        </>
    );
}

export default App;
