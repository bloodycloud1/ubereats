const ModalCart = ({ setOpenModal }: any) => {
  const closeModal = (e: any) => {
    if (e.target.id === 'overlay-modal-cart') {
      setOpenModal(null);
    }
  };

  return (
    <div id="overlay-modal-cart" onClick={closeModal}>
      <div className="modal container mx-auto">
        <h2>Корзина</h2>
        {/* <Order /> */}
      </div>
    </div>
  );
};

export default ModalCart;
