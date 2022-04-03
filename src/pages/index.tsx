import { GetServerSideProps } from "next";
import { FC } from "react";
import { reustarantType } from "../types/reustarantType";

type reustarantTypeProps = {
  reustarant: [reustarantType];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:3000//api/reustarants");
  const data = await res.json();

  return {
    props: {
      reustarant: data,
    },
  };
};

const Home: FC<reustarantTypeProps> = ({ reustarant }) => {
  return (
    <div>
      {reustarant.map(({ id, name, type, time }) => (
        <div key={id}>
          <div>{name}</div>
          <div>{type}</div>
          <div>{time}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
