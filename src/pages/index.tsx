import RestaurantList from '../components/home/main/reustarants/restaurant-list';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../utils/read-file-restaurant';
import HeadApp from '../components/head/head';
import Header from '../components/header/header';

export const getStaticProps: GetStaticProps = async () => {
  const data = await readFileRestaurant();
  return {
    props: {
      restaurants: data
    }
  };
};

const Home = ({ restaurants }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <HeadApp title="UberEats" />
      <Header />
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Home;
