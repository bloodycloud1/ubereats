import { FC } from 'react';
import { RestaurantType } from '../../../interface/restaurant';
import Restaurant from './restaurant-card';

type RestaurantListProps = {
  restaurants: RestaurantType[];
};

const RestaurantList: FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {restaurants.map((item, id) => {
          return <Restaurant key={id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantList;
