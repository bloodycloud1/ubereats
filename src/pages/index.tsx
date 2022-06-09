import RestaurantList from '../components/home/main/reustarants/restaurant-list';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../utils/read-file-restaurant';
import HeadApp from '../components/head/head';
import { useEffect, useState } from 'react';

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
