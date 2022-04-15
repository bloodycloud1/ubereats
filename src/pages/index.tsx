import { FC } from "react";
import { GetServerSideProps } from "next";
import { ReustarantTypeProps } from "../interface/interface";
import ReustarantList from "../components/home/main/list";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/reustarants");
  const data = await res.json();

  return {
    props: {
      reustarants: data,
    },
  };
};

const Home: FC<ReustarantTypeProps> = ({ reustarants }) => {
  return <ReustarantList reustarants={reustarants} />;
};

export default Home;
