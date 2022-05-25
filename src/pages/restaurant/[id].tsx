import React from 'react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { readFileRestaurant } from '../../utils/read-file-restaurant';
import { RestaurantType } from '../../interface/restaurant';
import TabSection from '../../components/restaurant/main/tab-menu/tab-section';
import HeadApp from '../../components/head/head';
// import HeadApp from '../../components/head/head';
// import WallpaperRestaurant from '../../components/restaurant/main/wallpaper/wallpaper';
import WallpaperRestaraunt from '../../components/restaurant/main/wallpaper/wallpaper';
const RestaurantPage = ({ restaurant }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <HeadApp title={`UberEats: ${restaurant.name}`} />
      <WallpaperRestaraunt wallpaperUrl={restaurant.wallpaper} />
      <TabSection {...restaurant} />
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

{
  /* <div className="container mx-auto">
<TabsDishType value={value} handleChange={handleChange}>
  {restaurant.menu.map((item, index) => {
    return <TabName name={item.name} key={index} />;
    // return <Tab label={item.name} key={index} />;
  })}
</TabsDishType>
{restaurant.menu.map((item, index) => {
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
</div> */
}
