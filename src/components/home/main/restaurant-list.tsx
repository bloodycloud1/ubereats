import { FC } from 'react';
import { Restaurant as RestaurantType } from '../../../interface/restaurant';
import Restaurant from './restaurant';

type RestaurantListProps = {
  restaurants: RestaurantType[];
};

const RestaurantList: FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <>
      {restaurants.map((item, id) => {
        return <Restaurant key={id} {...item} />;
      })}
    </>
  );
};

export default RestaurantList;
