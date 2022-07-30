import Image from 'next/image';

const ModalDishCard = ({ setOpenModal, imgUrl, dishname, discription, price }: any) => {
  const closeModal = (e: any) => {
    if (e.target.id === 'overlay-modal-dish-card') {
      setOpenModal(null);
    }
  };

  return (
    <div id="overlay-modal-dish-card" onClick={closeModal}>
      <div className=" mt-40 xs:w-[280px] xs:h-[500px] bg-white-f">
        <div className="h-56 relative">
          <Image src={imgUrl} layout="fill" alt="modal-img" />
        </div>
        <h1>{dishname}</h1>
        <p>{discription}</p>
        <div>{price}</div>
        <div>добавить</div>
      </div>
    </div>
  );
};

export default ModalDishCard;
