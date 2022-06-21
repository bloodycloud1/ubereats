import { useState } from 'react';
import ModalCart from '../modal/modal-cart';

const Cart = ({ openModal, setOpenModal }: any) => {
  // const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className="relative">
        <div className=" absolute h-6 w-6 text-center bg-green-57 rounded-full -z-10 bottom-2.5 left-3">
          <span className=" text-white-f">0</span>
        </div>
        <img className="h-6 w-6 cursor-pointer z-10" src="/images/components/header/shopbag.svg" onClick={setOpenModal} />
      </div>
      {openModal && <ModalCart setOpenModal={setOpenModal} />}
    </>
  );
};

export default Cart;
