import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../../utils/read-file-restaurant';
import { RestaurantType } from '../../interface/restaurant';
import TabsDishType from '../../components/restaurant/main/tabs/tabs-dish-type';
import TabPanel from '../../components/restaurant/main/tabs/tab-panel';
import TabDishCard from '../../components/restaurant/main/tabs/tab-dish-card';
import { Tab } from '@mui/material';

const RestaurantPage = ({ restaurant }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const restaurantMenu = restaurant.menu;
  const [value, setValue] = React.useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="container mx-auto">
      <TabsDishType value={value} handleChange={handleChange}>
        {restaurantMenu.map((item, i) => {
          return <Tab label={item.name} key={i} />;
        })}
      </TabsDishType>
      <div>
        {restaurantMenu.map((item, index) => {
          return (
            <TabPanel value={value} index={index} key={index}>
              {item.dishlist.map((item, index) => {
                return (
                  <TabDishCard
                    dishname={item.dishname}
                    discription={item.discription}
                    price={item.price}
                    imgUrl={item.imgUrl}
                    key={index}
                  />
                );
              })}
            </TabPanel>
          );
        })}
      </div>
    </div>
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
