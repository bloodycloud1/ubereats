import React, { FC } from 'react';

type ImgType = {
  onClick: any;
  src: string;
};

const DishcardImg: FC<ImgType> = ({ onClick, src }) => {
  return <img className="xs:h-27 xs:w-36 sm:h-36 sm:w-56 md:h-54 md:w-62 xlg:h-58 xlg:w-72" src={src} alt="картинка блюда" onClick={onClick} />;
};

export default DishcardImg;
