import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { readFileReustarant } from "../../utils/read-res";
import { Reustarant } from "../../interface/reustarant";

const ReustarantPage = ({reustarants}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div>
      {reustarants.menu.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </div>
  );
};
export default ReustarantPage;


export const getStaticPaths: GetStaticPaths = async () => {
  const data = await readFileReustarant();
  return {
    paths: data.map((item) => ({
      params: { id: item.id },
    })),
    fallback: false
  };
  
};
export const getStaticProps: GetStaticProps<{
  reustarants: Reustarant;
}> = async (ctx) => {
    const { params } = ctx;
  const data = await readFileReustarant();
  // @ts-ignore
  const reustarants = data.find((p) => p.id === params.id) as Reustarant;

  // const res = await fetch(`http://localhost:3000/api/${query.id}`);
  // const data = await res.json();

  return {
    props: {
      reustarants,
    },
  };
};
