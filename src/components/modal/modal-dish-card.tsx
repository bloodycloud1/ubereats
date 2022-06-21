const ModalDishCard = ({ setOpenModal, imgUrl, dishname, discription, price }: any) => {
  const closeModal = (e: any) => {
    if (e.target.id === 'overlay-modal-dish-card') {
      setOpenModal(null);
    }
  };

  return (
    <div id="overlay-modal-dish-card" onClick={closeModal}>
      <div className="modal">
        <img src={imgUrl} />
        <h1>{dishname}</h1>
        <p>{discription}</p>
        <div>{price}</div>
        <div>добавить</div>
      </div>
    </div>
  );
};

export default ModalDishCard;
