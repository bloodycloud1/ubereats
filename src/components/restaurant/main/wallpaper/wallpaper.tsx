import { FC } from 'react';
import { RestaurantType } from '../../../../interface/restaurant';

const WallpaperRestaurant: FC<RestaurantType> = (props) => {
  const { wallpaper, name, type, time } = props;
  return (
    <div className="container mx-auto">
      <div className="relative">
        <div className="wallpaper-wrapper bg-white-f  shadow-md rounded-sm">
          <div className="wallpaper-title md:mt-6 md:ml-12 xs:text-2xl md:text-4xl xs:text-center md:text-left">{name}</div>
          <div className="flex xs:flex-col xs:items-center md:flex-row md:items-start md:justify-between md:mx-12 md:mb-9 md:mt-14">
            <div className="wallpaper-restaurant-type xs:text-xs-14 lg:text-lg ">{type}</div>
            <div className="wallpaper-restaurant-time xs:text-xs-14 lg:text-lg">{time}</div>
          </div>
        </div>
        <img src={wallpaper} className="wallpaper-img" />
      </div>
    </div>
  );
};

export default WallpaperRestaurant;
