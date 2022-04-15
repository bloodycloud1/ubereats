import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { promises as fs } from "fs";
import path from "path";

type Dish = {
  dishname: string;
  imgUrl: string;
  discription: string;
  price: number;
};

type Menu = {
  name: string;
  dishlist: Dish[];
};

export type Reustarant = {
  id: string;
  name: string;
  type: string;
  time: string;
  image: string;
  wallpaper: string;
  menu: Menu[];
};

const ReustarantPage = ({
  reustarants,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const reustarantMenu = reustarants[0].menu;
  // console.log(reustarants);
  return (
    <div>
      {reustarants.menu.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </div>
  );
};
export default ReustarantPage;

export const getServerSideProps: GetServerSideProps<{
  reustarants: Reustarant;
}> = async (ctx) => {
  const { query } = ctx;
  const checkDataFetch = path.join(process.cwd(), "db/db1.json");
  const fileDb = await fs.readFile(checkDataFetch, "utf8");

  const data = JSON.parse(fileDb) as Reustarant[];
  const reustarants = data.find((p) => p.id === query.id) as Reustarant;

  // const res = await fetch(`http://localhost:3000/api/${query.id}`);
  // const data = await res.json();

  return {
    props: {
      reustarants,
    },
  };
};
