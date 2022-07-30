import React, { FC, useState } from 'react';
import { DishType } from '../../../../interface/restaurant';
import ModalDishCard from '../../../modal/modal-dish-card';
import Image from 'next/image';
import { useOpenModal } from '../../../../hooks/useOpenModal';

const TabDishCard: FC<DishType> = ({ dishname, discription, price, imgUrl }) => {
  const modal = useOpenModal();
  const addToOrder = () => {};

  return (
    <>
      {modal.openModal && <ModalDishCard setOpenModal={modal.setOpenModal} imgUrl={imgUrl} dishname={dishname} discription={discription} price={price} />}
      <div className="border border-solid border-grey-e rounded w-full">
        <div className="flex">
          <div className="xs:h-27 xs:w-36 sm:h-36 sm:w-56 md:h-54 md:w-62 xlg:h-58 xlg:w-72 cursor-pointer">
            <div className="xs:h-27 xs:w-36 sm:h-36 sm:w-56 md:h-54 md:w-62 xlg:h-58 xlg:w-72 relative" onClick={() => modal.setOpenModal(false)}>
              <Image src={imgUrl} alt="dishcard-image" layout="fill" />
            </div>
          </div>
          {/* SECOND PART CARD */}
          <div className="w-full relative">
            <div className="text-green-57 xs:text-xs-12 sm:text-sm md:text-base ml-2">{dishname}</div>
            {/* <div className="xs:text-xs-10 sm:text-xs-12 ml-2">{discription}</div> */}
            <button className="text-yellow-400 xs:text-xs-10 sm:text-sm md:text-base ml-2">подробнее</button>
            {/* PRICE BUY  */}
            <div className="absolute bottom-2 left-0 w-full">
              <div className="flex items-center justify-between mx-2">
                <p className="xs:text-xs-14 sm:text-xl lg:text-3xl mr-3">{price} р</p>
                <div className="flex start">
                  <div className="flex items-center justify-center border rounded-full px-2 py-1 cursor-pointer">
                    <button className="xs:text-xs-10 sm:text-sm md:text-base" onClick={addToOrder}>
                      добавить
                    </button>
                    <button className="xs:text-xs-10 sm:text-sm md:text-base">добавить</button>
                    <div className="xs:h-3 xs:w-3 sm:h-4 sm:w-4 relative">
                      <Image src="/images/components/header/shopbag.svg" layout="fill" alt="shopbag" />
                    </div>
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
