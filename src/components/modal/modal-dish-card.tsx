import { useRef } from 'react';


const ModalDishCard = ({ isOpen, onClose, children }: any) => {
  const outsideRef = useRef(null);

  const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <div className={'modal-dish-card'} ref={outsideRef} onClick={handleCloseOnOverlay}>
      <div className={'modal-dish-card-content'} />
      <div className={'modal-dish-card-box'}>{children}</div>
    </div>
  ) : null;
};

export default ModalDishCard;

