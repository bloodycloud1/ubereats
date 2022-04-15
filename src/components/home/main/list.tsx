import { FC } from "react";
import { ReustarantTypeProps } from "../../../interface/interface";
import Reustarant from "./reustarant";

const ReustarantList: FC<ReustarantTypeProps> = ({ reustarants }) => {
  const renderReustarantList = reustarants.map((item) => {
    const { id, name, type, time } = item;
    return <Reustarant key={id} id={id} name={name} type={type} time={time} />;
  });

  return <div>{renderReustarantList}</div>;
};

export default ReustarantList;
