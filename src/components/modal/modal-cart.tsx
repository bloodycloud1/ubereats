import { useRef } from 'react';
import Order from '../orders/order';

const ModalCart = ({ isOpen, onClose }: any) => {
  const outsideRef = useRef(null);

  const ref = useRef(null);

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
        <Order ref={ref} />
      </div>
    </div>
  ) : null;
};

export default ModalCart;
