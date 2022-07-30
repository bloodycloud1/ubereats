const ModalCart = ({ setOpenModal }: any) => {
  const closeModal = (e: any) => {
    if (e.target.id === 'overlay-modal-cart') {
      setOpenModal(null);
    }
  };

  return (
    <div id="overlay-modal-cart" onClick={closeModal}>
      <div className=" mt-40 xs:w-[280px] xs:h-[500px] bg-white-f">
        <h1>shop bag</h1>
      </div>
    </div>
  );
};

export default ModalCart;
