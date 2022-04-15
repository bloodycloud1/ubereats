import { FC, Fragment } from "react";
import { Reustarant as ReustarantType } from "../../../interface/reustarant";
import Reustarant from "./reustarant";

type ReustarantListProps = {
  reustarants: ReustarantType[];
};

const ReustarantList: FC<ReustarantListProps> = ({ reustarants }) => {
  return (
    <>
      {reustarants.map((item, id) => {
        return <Reustarant key={id} {...item} />;
      })}
    </>
  );
};

export default ReustarantList;
