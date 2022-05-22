import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../../utils/read-file-restaurant';
import { RestaurantType } from '../../interface/restaurant';
import TabsDishType from '../../components/restaurant/main/menu/tabs-dish-type';
import TabPanel from '../../components/restaurant/main/menu/tab-panel';
import TabDishCard from '../../components/restaurant/main/menu/tab-dish-card';
import { Tab } from '@mui/material';
import HeadApp from '../../components/head/head';
import WallpaperRestaurant from '../../components/restaurant/main/wallpaper/wallpaper';

const RestaurantPage = ({ restaurant }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const restaurantMenu = restaurant.menu;
  const restaurantName = restaurant.name;

  const [value, setValue] = React.useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, newValue: number) => {
    e.preventDefault();
    setValue(newValue);
  };

  return (
    <div className="id-page">
      <HeadApp title={`UberEats: ${restaurantName}`} />
      <WallpaperRestaurant wallpaperUrl={restaurant.wallpaper} />
      <div className="container mx-auto">
        <TabsDishType value={value} handleChange={handleChange}>
          {restaurantMenu.map((item, index) => {
            return <Tab label={item.name} key={index} />;
          })}
        </TabsDishType>
        {restaurantMenu.map((item, index) => {
          return (
            <TabPanel value={value} index={index} key={index}>
              {item.dishlist.map((item, index) => {
                const { dishname, discription, price, imgUrl } = item;
                return (
                  <TabDishCard
                    dishname={dishname}
                    discription={discription}
                    price={price}
                    imgUrl={imgUrl}
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
export const getStaticProps: GetStaticProps<{ restaurant: RestaurantType }> = async (ctx) => {
  const id = ctx.params?.id as string;
  const data = await readFileRestaurant();
  const restaurant = data.find((p) => p.id === id) as RestaurantType;

  return {
    props: {
      restaurant
    }
  };
};
