import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartContainer from './components/CartContainer/CartContainer';
import Footer from './components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { carculateTotals } from './features/cart/cartSlice';
import ModalPortal from './components/ModalPotal';
import Modal from './components/Modal/Modal';
function App() {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);
    useEffect(() => {
        dispatch(carculateTotals());
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
