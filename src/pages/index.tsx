import ReustarantList from "../components/home/main/list";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { readFileReustarant } from "../utils/read-res";

export const getStaticProps: GetStaticProps = async () => {
  const data = await readFileReustarant();
  return {
    props: {
      reustarants: data,
    },
  };
};


// REMOVE но надо чекать
// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await readFileReustarant();
//   return {
//     paths: data.map((item) => ({
//       params: { id: item.id },
//     })),
//     fallback: false
//   };
  
// };

const Home = ({
  reustarants,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <ReustarantList reustarants={reustarants} />;
};

export default Home;
