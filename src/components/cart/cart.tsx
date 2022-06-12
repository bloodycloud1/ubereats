import { useState, useRef } from 'react';

const ModalCart = ({ isOpen, onClose }: any) => {
  const outsideRef = useRef(null);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={'modal'} ref={outsideRef} onClick={handleCloseOnOverlay}>
      <div className={'modal-content'} />
      <div className={'modal-box'}>
        <h2>Корзина</h2>
      </div>
    </div>
  ) : null;
};

const Cart = () => {
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  return (
    <>
      <div className="relative">
        <div className=" absolute h-6 w-6 text-center bg-green-57 rounded-full -z-10 bottom-2.5 left-3">
          <span className=" text-white-f">0</span>
        </div>
        <img className="h-6 w-6 cursor-pointer z-10" src="images/components/header/shopbag.svg" onClick={toggleModal} />
      </div>
      <ModalCart isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Cart;
