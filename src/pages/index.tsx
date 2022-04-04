import { FC } from "react";
import { GetServerSideProps } from "next";
import { ReustarantTypeProps } from "../interface/ReustarantType";
import ReustarantList from "../components/ReustarantList";

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
  return (
    <div>
      <ReustarantList reustarants={reustarants} />
    </div>
  );
};

export default Home;
