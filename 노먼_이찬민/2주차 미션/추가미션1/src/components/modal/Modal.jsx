import React from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

export default Modal;
