import ModalCart from '../modal/modal-cart';
import Image from 'next/image';

const Cart = ({ openModal, setOpenModal }: any) => {
  return (
    <>
      {openModal && <ModalCart setOpenModal={setOpenModal} />}
      <div className="relative">
        <div className=" absolute h-6 w-6 text-center bg-green-57 rounded-full -z-10 bottom-2.5 left-3">
          <span className=" text-white-f">0</span>
        </div>
        <div className="h-6 w-6 cursor-pointer relative z-10" onClick={setOpenModal}>
          <Image src="/images/components/header/shopbag.svg" alt="shop-bag" layout="fill" />
        </div>
      </div>
    </>
  );
};

export default Cart;
