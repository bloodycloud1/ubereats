import RestaurantList from '../components/home/main/restaurant-list';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../utils/read-res';

export const getStaticProps: GetStaticProps = async () => {
  const data = await readFileRestaurant();
  return {
    props: {
      restaurants: data
    }
  };
};

const Home = ({
  restaurants
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <RestaurantList restaurants={restaurants} />;
};

export default Home;
