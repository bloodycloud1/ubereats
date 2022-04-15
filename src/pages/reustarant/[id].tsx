import { FC } from "react";
import { GetServerSideProps } from "next";
import { ReustarantTypeProps } from "../../interface/id";


const ReustarantPage: FC<ReustarantTypeProps> = ({ reustarants }) => {
  const { menu } = reustarants.menu;
  console.log([menu]);
  return <div></div>;
};
export default ReustarantPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const res = await fetch(`http://localhost:3000/api/${query.id}`);
  const data = await res.json();

  return {
    props: {
      reustarants: data,
    },
  };
};

// work on JS

// const ReustarantPage = ({ reustarants }: any) => {
//   const res = reustarants.menu[1].name;
//   // console.log(res);
//   return <div>{res}</div>;
// };
