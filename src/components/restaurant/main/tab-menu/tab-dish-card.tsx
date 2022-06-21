import React, { FC } from 'react';
import { DishType } from '../../../../interface/restaurant';
import ModalDishCard from '../../../modal/modal-dish-card';
import { useOpenModal } from '../../../hooks/useOpenModal';
import DishcardImg from './components/dishcard-img';

const TabDishCard: FC<DishType> = ({ dishname, discription, price, imgUrl }) => {
  const modal = useOpenModal();

  return (
    <>
      {modal.openModal && <ModalDishCard setOpenModal={modal.setOpenModal} imgUrl={imgUrl} dishname={dishname} discription={discription} price={price} />}
      <div className="border border-solid border-grey-e rounded w-full">
        <div className="flex">
          <div className="xs:h-27 xs:w-36 sm:h-36 sm:w-56 md:h-54 md:w-62 xlg:h-58 xlg:w-72 cursor-pointer">
            <DishcardImg onClick={modal.setOpenModal} src={imgUrl} />
            {/* <img className="xs:h-27 xs:w-36 sm:h-36 sm:w-56 md:h-54 md:w-62 xlg:h-58 xlg:w-72" src={imgUrl} alt="картинка блюда" onClick={modal.setOpenModal} /> */}
          </div>
          {/* SECOND PART CARD */}
          <div className="w-full relative">
            <div className="text-green-57 xs:text-xs-12 sm:text-sm md:text-base ml-2">{dishname}</div>
            <div className="xs:text-xs-10 sm:text-xs-12 ml-2">{discription}</div>
            <button className="text-yellow-400 xs:text-xs-10 sm:text-sm md:text-base ml-2">подробнее</button>
            {/* PRICE BUY  flex items-center justify-between  */}
            <div className="absolute bottom-2 left-0 w-full">
              <div className="flex items-center justify-between mx-2">
                <div className="xs:text-xs-14 sm:text-xl lg:text-3xl mr-3">{price} р</div>
                <div className="flex start">
                  <div className="flex items-center justify-center border rounded-full px-2 py-1 cursor-pointer">
                    <div className="xs:text-xs-10 sm:text-sm md:text-base">добавить</div>
                    <img className="xs:h-3 xs:w-3 sm:h-4 sm:w-4" src="/images/components/header/shopbag.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TabDishCard;
