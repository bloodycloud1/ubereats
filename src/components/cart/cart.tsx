import { useState } from 'react';
// import ModalCart from '../modal-cart/modal-cart';
// const modalElement = document.querySelector('.modal-content');
const ModalCart = ({ show, close }: any) => {
  return (
    <div
      className="modal-cart"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-content">
        <span onClick={close}>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

const Cart = () => {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => {
    setShow(false);
  };

  return (
    <div className="relative">
      <div className=" absolute h-6 w-6 text-center bg-green-57 rounded-full -z-10 bottom-2.5 left-3">
        <span className=" text-white-f">0</span>
      </div>
      <img className="h-6 w-6 cursor-pointer  z-10" src="images/components/header/shopbag.svg" onClick={() => setShow(true)} />
      {/* {open ? <ModalCart /> : null} */}
      <ModalCart show={show} close={closeModalHandler} />
    </div>
  );
};

export default Cart;
