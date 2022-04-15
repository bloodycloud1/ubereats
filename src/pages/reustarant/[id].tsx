import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { readFileReustarant } from "../../utils/read-res";
import { Reustarant } from "../../interface/reustarant";

const ReustarantPage = ({
  reustarant,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      {reustarant.menu.map((item, i) => {
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
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{
  reustarant: Reustarant;
}> = async (ctx) => {
  const id = ctx.params?.id as string;
  const data = await readFileReustarant();
  const reustarant = data.find((p) => p.id === id) as Reustarant;

  return {
    props: {
      reustarant,
    },
  };
};
