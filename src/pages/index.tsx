import RestaurantList from '../components/home/main/reustarants/restaurant-list';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../utils/read-file-restaurant';
// import SearchReustarant from '../components/home/main/search-reustarants/search-restaurant';
import HeadApp from '../components/head/head';
import { useState, useMemo } from 'react';

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
      <RestaurantList restaurants={restaurants} />
    </>
  );
};

export default Home;
