import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../../utils/read-file-restaurant';
import { RestaurantType } from '../../interface/restaurant';

const RestaurantPage = ({
  restaurant
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {restaurant.menu.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </>
  );
};
export default RestaurantPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await readFileRestaurant();
  return {
    paths: data.map((item) => ({
      params: { id: item.id }
    })),
    fallback: false
  };
};
export const getStaticProps: GetStaticProps<{
  restaurant: RestaurantType;
}> = async (ctx) => {
  const id = ctx.params?.id as string;
  const data = await readFileRestaurant();
  const restaurant = data.find((p) => p.id === id) as RestaurantType;

  return {
    props: {
      restaurant
    }
  };
};
