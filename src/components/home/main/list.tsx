import { FC } from "react";
import { GetServerSideProps } from "next";
import { ReustarantTypeProps } from "../../../interface/interface";
import Reustarant from "./reustarant";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/reustarants");
  const data = await res.json();

  return {
    props: {
      reustarants: data,
    },
  };
};

const ReustarantList: FC<ReustarantTypeProps> = ({ reustarants }) => {
  const renderReustarantList = reustarants.map((item) => {
    const { id, name, type, time } = item;
    return <Reustarant key={id} id={id} name={name} type={type} time={time} />;
  });

  return <div>{renderReustarantList}</div>;
};

export default ReustarantList;
