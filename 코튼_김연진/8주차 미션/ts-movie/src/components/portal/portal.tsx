import ReactDOM from 'react-dom';
const Portal = ({ children }: { children: React.ReactNode }) => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return null;

    return ReactDOM.createPortal(children, modalRoot);
};

export default Portal;
