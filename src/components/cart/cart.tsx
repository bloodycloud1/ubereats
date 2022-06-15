import { useState } from 'react';
import ModalCart from '../modal/modal-cart';

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
